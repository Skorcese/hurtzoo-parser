import { BASE_URL } from '../config.js';
import { Product, Op } from '@bushidogames/db';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.0 Safari/537.36';

export const getPricePerEAN = async (page) => {
  console.log('-------------------------------');
  const product = await getNextEAN();
  console.log('EAN - ', product.ean);

  await page.goto(`${BASE_URL}+${product.ean}`);
  await page.setUserAgent(USER_AGENT);
  const url = await page.url();

  const price = await parsePrices(page, url);
  console.log('ceneoPrice: ', price);

  await updateProduct(price, product);

  if (shouldSearchNext(product.visitId)) {
    await getPricePerEAN(page);
  }
};

const getNextEAN = async () => {
  return Product.findOne({
    order: [['visitId', 'ASC']],
    attributes: ['ean', 'id', 'visitId'],
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
    console.log('Product not found');
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
