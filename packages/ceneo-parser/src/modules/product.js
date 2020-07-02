import { BASE_URL } from '../config.js';
import { Product, Op } from 'db';

export const getPricePerEAN = async (page) => {
  const { dataValues } = await getNextEAN();
  let { ean, id, visitId } = dataValues;

  console.log('EAN - ', ean);
  await page.goto(`${BASE_URL}+${ean}`);
  const url = await page.url();

  const price = await parsePrices(page, url);
  console.log('ceneoPrice: ', price);

  await updateProduct(price, id, visitId + 1);

  if (shouldSearchNext(visitId + 1)) {
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
    return await getPrices(page, '.alert > .cat-prod-row');
  } else {
    await page.waitForSelector('.category-list');
    return await getPrices(page, '.category-list-body > .cat-prod-box');
  }
};

const getPrices = async (page, selector) => {
  return await page.$$eval(selector, (items) => {
    const parsed = items.map((item) => {
      let price = item.querySelector('span.price').textContent;

      return price.trim().replace(',', '.').replace(' ', '');
    });

    return parsed.sort()[0];
  });
};

const updateProduct = async (price, id, visitId) => {
  await Product.update(
    {
      visitId: visitId,
      ceneoPrice: price,
    },
    {
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    },
  );
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
