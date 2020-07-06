import { BASE_URL } from '../config.js';
import { Product, Op } from '@bushidogames/db';

export const getPricePerEAN = async (page) => {
  const product = await getNextEAN();

  console.log('EAN - ', product.ean);
  await page.goto(`${BASE_URL}+${product.ean}`);
  const url = await page.url();

  const price = await parsePrices(page, url);
  console.log('ceneoPrice: ', price);

  await updateProduct(price, product);

  if (shouldSearchNext(product.visitId + 1)) {
    await getPricePerEAN(page);
  }
};

const getNextEAN = async () => {
  return Product.findOne({
    order: [['visitId', 'ASC']],
    attributes: ['ean', 'id', 'visitId'],
  });
};

const parsePrices = async (page, url) => {
  if (url.includes('/;szukaj')) {
    await page.waitForSelector('.cat-prod-row');
    return getPrices(page, '.alert > .cat-prod-row');
  } else {
    await page.waitForSelector('.category-list');
    return getPrices(page, '.category-list-body > .cat-prod-box');
  }
};

const getPrices = async (page, selector) => {
  return await page.$$eval(selector, (items) => {
    const parsed = items.map((item) => {
      const price = item.querySelector('span.price').textContent;

      return price.trim().replace(',', '.').replace(' ', '');
    });

    return parsed.sort()[0];
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
