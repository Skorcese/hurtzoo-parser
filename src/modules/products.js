import { DEFAULT_SERVICE, BASE_URL } from '../config.js';
import { Product } from '../db/index.js';

const getUniquePaginationUrls = (urls) =>
  [...new Set(urls)].filter((url) => !url.match(/javascript/));

export const getProducts = async (page) => {
  try {
    await page.waitForSelector('.pagination', {
      timeout: 5000,
    });

    console.log('Changing products per page option');
    await page.click('#f_searcher > div:nth-child(2) .trigger');
    await page.click('#f_searcher li[data-raw-value="96"]');
    await page.waitForNavigation();
    console.log('Changed products per page option');

    const paginationUrls = await page.$eval('.pagination', (container) => {
      const links = [...container.querySelectorAll('a')];
      return links.map((link) => link.getAttribute('href'));
    });

    const urls = getUniquePaginationUrls(paginationUrls);

    const products = await getProductsFromOnePage(page);
    for (const url of urls) {
      products.push(...(await getProductsFromOnePage(page, url)));
    }

    return products;
  } catch (e) {
    console.log('NO PAGINATION');
    return getProductsFromOnePage(page);
  }
};

const getProductsFromOnePage = async (page, url) => {
  if (url) {
    await page.goto(`${BASE_URL}${url}`);
  }

  await page.waitForSelector('.listning-boxes');

  return page.$eval('.listning-boxes', (container) => {
    const products = RC_VARS.data.categories[0].products;

    return products.map((product) => {
      return {
        name: product.name_pl || product.name,
        localId: product.products_id,
        netPrice: product.gross_price / 1.08,
        ean: product.ean || product.products_model,
        producer: product.pr_name,
        url: product.url,
        imageUrl: product.main_image,
      };
    });
  });
};

export const storeProducts = async (allProducts) => {
  const promises = allProducts.map(async (product) => {
    const { localId } = product;

    const instance = await Product.findOrCreate({
      where: { localId },
      defaults: {
        localId,
        service: DEFAULT_SERVICE,
      },
    });

    return await instance[0].update({
      ...product,
    });
  });
  const products = await Promise.all(promises);

  console.log(`Found ${allProducts.length} products.`);

  return products;
};
