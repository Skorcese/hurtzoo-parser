import { Product, Op } from '@bushidogames/db';
import {
  BASE_URL,
  USER_AGENT,
  SCREENSHOT_PATH,
  SERVICE_URL,
} from '../config.js';

export const getPricePerEAN = async (page) => {
  console.log('-------------------------------');
  const product = await getNextEAN();
  console.log('EAN - ', product.ean);

  await page.goto(`${BASE_URL}+${product.ean}`);
  await page.setUserAgent(USER_AGENT);

  const url = await page.url();

  const item = await getBestItem(page, url);

  await updateProduct(item, product);

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

const getItemSelectors = (url) => {
  return url.includes('/;szukaj')
    ? ['.cat-prod-row', '.alert > .cat-prod-row']
    : ['.category-list', '.category-list-body > .cat-prod-box'];
};

const getBestItem = async (page, url) => {
  const [isSelectorAvailable, containerSelector] = getItemSelectors(url);

  try {
    await page.waitForSelector(isSelectorAvailable, {
      timeout: 8000,
    });

    const products = await getItems(page, containerSelector);

    const lowest = products.sort((a, b) => a.price - b.price)[0];

    return { price: lowest.price, url: lowest.url };
  } catch (error) {
    console.log(error);

    return 0;
  }
};

const getItems = async (page, containerSelector) => {
  return await page.$$eval(containerSelector, (items) => {
    return items.map((item) => {
      const name1 = item.querySelector('strong.cat-prod-row__name');
      const name2 = item.querySelector('strong.cat-prod-box__name');
      const name = name1 || name2;
      const price = item.querySelector('span.price').textContent;
      const url = item.querySelector('a').getAttribute('href');

      return {
        name: name.textContent.trim(),
        price: parseFloat(
          price.trim().replace(',', '.').replace(' ', ''),
        ).toFixed(2),
        url: url,
      };
    });
  });
};

const isPriceValid = async (page, price, product) => {
  const ceneoPrice = parseInt(price.toString().replace('.', ''));
  const servicePrice = parseInt(product.price.toString().replace('.', ''));
  const comparison = ceneoPrice / servicePrice;

  if (ceneoPrice === 0) {
    return false;
  } else if (comparison > 2) {
    console.log(`Too expensive`);
    // nadal ENOENT
    // makeScreenshot(page, product.ean)
    return false;
  } else if (comparison < 0.5) {
    console.log(`Too cheap`);
    // nadal ENOENT
    // makeScreenshot(page, product.ean)
    return false;
  } else {
    return true;
  }
};

const makeScreenshot = (page, ean) => {
  page.screenshot({
    path: `${SCREENSHOT_PATH}${ean}.jpg`,
    fullPage: true,
  });
};

const updateProduct = async (item, product) => {
  product.isUncertain = !isPriceValid('page', item.price, product.price);
  product.visitId = product.visitId += 1;
  product.url = SERVICE_URL + item.url;
  product.ceneoPrice = item.price;
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
