import { Product, Op } from '@bushidogames/db';
import { BASE_URL, USER_AGENT, SCREENSHOT_PATH } from '../config.js';

export const getPricePerEAN = async (page) => {
  console.log('-------------------------------');
  const product = await getNextEAN();
  console.log('EAN - ', product.ean);

  await page.goto(`${BASE_URL}+${product.ean}`);
  await page.setUserAgent(USER_AGENT);
  const url = await page.url();

  const price = await parsePrices(page, url);
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

const parsePrices = async (page, url) => {
  const [isSelectorAvailable, priceSelector] = getPriceSelectors(url);

  try {
    await page.waitForSelector(isSelectorAvailable);
    console.log('Price retrieved successfully');
    return getPrices(page, priceSelector);
  } catch (error) {
    console.log('Product not found or selector did not load');
    return 0;
  }
};

const getPrices = async (page, selector) => {
  return await page.$$eval(selector, (items) => {
    const parsed = items.map((item) => {
      const price = item.querySelector('span.price').textContent;

      return parseFloat(
        price.trim().replace(',', '.').replace(' ', ''),
      ).toFixed(2);
    });

    return parsed.sort((a, b) => a - b)[0];
  });
};

const validatePrice = async (page, price, product) => {
  if (price === 0) {
    product.isUncertain = 1;
    return product;
  } else if (
    parseFloat(price).toFixed(2) / parseFloat(product.price).toFixed(2) >
    2
  ) {
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
  } else if (
    parseFloat(price).toFixed(2) / parseFloat(product.price).toFixed(2) >
    0.5
  ) {
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
