import { Product, Op } from '@bushidogames/db';
import { BASE_URL, USER_AGENT, SCREENSHOT_PATH } from '../config.js';
import cosineSimilarity from '../algorithms/cosineSimilarity.js';

export const getPricePerEAN = async (page) => {
  console.log('-------------------------------');
  const product = await getNextEAN();
  console.log('EAN - ', product.ean);

  await page.goto(`${BASE_URL}+${product.ean}`);
  await page.setUserAgent(USER_AGENT);
  const url = await page.url();

  const price = await parsePrices(page, url, product.name);
  console.log('ceneoPrice: ', price);

  const validatedProduct = await validatePrice(page, price, product);

  await updateProduct(price, validatedProduct);

  if (shouldSearchNext(product.visitId)) {
    await getPricePerEAN(page);
  }
};

const getNextEAN = async () => {
  return Product.findOne({
    order: [['visitId', 'ASC']],
    attributes: ['ean', 'id', 'visitId', 'price', 'service', 'name'],
  });
};

const getPriceSelectors = (url) => {
  return url.includes('/;szukaj')
    ? ['.cat-prod-row', '.alert > .cat-prod-row']
    : ['.category-list', '.category-list-body > .cat-prod-box'];
};

const parsePrices = async (page, url, serviceName) => {
  const [isSelectorAvailable, priceSelector] = getPriceSelectors(url);

  try {
    await page.waitForSelector(isSelectorAvailable);

    const products = getPrices(page, priceSelector);

    // const nameTest = validateName(products[0].name, serviceName);
    // console.log(nameTest);

    const lowestPrice = products.sort((a, b) => a.price - b.price)[0];

    console.log('Price retrieved successfully');
    return lowestPrice;
  } catch (error) {
    console.log(error);
    console.log('Product not found or selector did not load');
    return 0;
  }
};

// IN PROGRESS
const getPrices = async (page, selector) => {
  return await page.$$eval(selector, (items) => {
    return items.map((item) => {
      const price = item.querySelector('span.price').textContent;
      // const name = item.querySelector('strong.cat-prod-row__name').textContent;
      // const name = item.getAttribute('data-gaproductname');
      // console.log(name);
      return {
        // name: name ? name.trim() : 'empty',
        price: parseFloat(
          price.trim().replace(',', '.').replace(' ', ''),
        ).toFixed(2),
      };
    });
  });
};

const validateName = (name, serviceName) => {
  console.log(name);
  console.log(serviceName);
  const cosine = cosineSimilarity(name, serviceName);
  return cosine;
};

const validatePrice = async (page, price, product) => {
  const ceneoPrice = Number(price.toString().replace('.', ''));
  const servicePrice = Number(product.price.replace('.', ''));

  if (ceneoPrice === 0) {
    product.isUncertain = 1;
    return product;
  } else if (ceneoPrice / servicePrice > 2) {
    console.log(
      `Ceneo price twice as high than ${product.service} price - ${product.ean}.jpg`,
    );

    //  Error: ENOENT: no such file or directory, open './src/screenshots/4048422102625.jpg'
    // page.screenshot({
    //   path: `${SCREENSHOT_PATH}${product.ean}.jpg`,
    //   fullPage: true,
    // });

    product.isUncertain = 1;
    return product;
  } else if (ceneoPrice / servicePrice > 0.5) {
    console.log(
      `Ceneo price twice as low than ${product.service} price - ${product.ean}.jpg`,
    );

    //  Error: ENOENT: no such file or directory, open './src/screenshots/4048422102625.jpg'
    // page.screenshot({
    //   path: `${SCREENSHOT_PATH}${product.ean}.jpg`,
    //   fullPage: true,
    // });

    product.isUncertain = 1;
    return product;
  } else {
    product.isUncertain = 0;
    return product;
  } // TODO: else other validations
};

const updateProduct = async (price, product) => {
  product.visitId += 1;
  product.ceneoPrice = price;
  await product.save();
};

const shouldSearchNext = async (visitId) => {
  const count = await Product.count();
  const countCurrentVisitId = await Product.findAndCountAll({
    where: {
      visitId: {
        [Op.eq]: visitId,
      },
    },
  });

  return count === countCurrentVisitId.count ? false : true;
};
