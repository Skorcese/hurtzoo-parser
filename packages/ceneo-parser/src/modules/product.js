import { Product, Op } from '@bushidogames/db';
import { logger, CENEO_PARSER } from '@bushidogames/utils';
import { BASE_URL, USER_AGENT, SCREENSHOT_PATH } from '../config.js';

export const getPricePerEAN = async (page) => {
  const product = await getNextEAN();
  logger.info(CENEO_PARSER, 'EAN - ', product.ean);

  await page.setUserAgent(USER_AGENT);

  try {
    await page.goto(`${BASE_URL}+${product.ean}`);
  } catch (error) {
    logger.warn(CENEO_PARSER, 'Page crashed, restarting process...');
    process.exit(1);
  }

  const url = await page.url();

  const item = await getBestItem(page, url);

  await updateProduct(page, item, product);

  if (shouldSearchNext(product.visitId)) {
    await getPricePerEAN(page);
  }
};

export const getNextEAN = async () =>
  Product.findOne({
    order: [['visitId', 'ASC']],
    attributes: ['ean', 'id', 'visitId', 'price', 'service', 'name'],
  });

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
    const parsedProducts = products.map(({ name, price }) => ({
      name: name,
      price: parseFloat(price.replace(',', '.').replace(' ', '')).toFixed(2),
    }));

    const lowest = parsedProducts.sort((a, b) => a.price - b.price)[0];

    return lowest === undefined || lowest.length == 0
      ? { price: 0 }
      : { price: lowest.price };
  } catch (error) {
    logger.warn(CENEO_PARSER, 'Product not found');
    return { price: 0 };
  }
};

const getItems = async (page, containerSelector) => {
  return await page.$$eval(containerSelector, (items) => {
    return items.map((item) => {
      const name = item.querySelector(
        'strong.cat-prod-row__name, strong.cat-prod-box__name',
      ).innerText;
      const price = item.querySelector('span.price').innerText;

      return {
        name,
        price,
      };
    });
  });
};

const isPriceValid = async (page, cPrice, productPrice, ean) => {
  const ceneoPrice = parseInt(cPrice);
  const servicePrice = parseInt(productPrice);
  const comparison = ceneoPrice / servicePrice;

  if (comparison > 2) {
    makeScreenshot(page, ean);
    return false;
  }

  if (comparison < 0.5) {
    makeScreenshot(page, ean);
    return false;
  }

  return true;
};

const makeScreenshot = (page, ean) => {
  page.screenshot({
    path: `${process.env.PWD}${SCREENSHOT_PATH}${ean}.jpg`,
    fullPage: true,
  });
};

const updateProduct = async (page, item, product) => {
  logger.info(CENEO_PARSER, 'ceneoPrice: ', item.price);
  logger.info(CENEO_PARSER, 'hurtZooPrice: ', product.price);
  product.isUncertain = !isPriceValid(
    page,
    item.price,
    product.price,
    product.ean,
  );
  product.visitId += 1;
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
