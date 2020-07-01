import { BASE_URL } from '../config.js';
import { Product, Op } from 'db';

// TODO
// incrementing visitId
// .alert price scraping
// correct product validation
// Loop

export const getPricePerEAN = async (page) => {
  const { dataValues } = await Product.findOne({
    where: { visitId: 0 },
    attributes: ['ean', 'id'],
  });
  const { ean, id } = dataValues;

  await page.goto(`${BASE_URL}+${ean}`);

  await page.waitForSelector('.category-list');

  const prices = await page.$$eval(
    '.category-list-body > .cat-prod-box',
    (items) => {
      const parsed = items.map((item) => {
        let price = item.querySelector('span.price').textContent;

        return price.trim().replace(',', '.');
      });

      return parsed;
    },
  );

  const price = prices.sort()[0];

  // const alert = await page.$$eval('.cat-prod-row', (items) => {
  //   const products = items.map((item) => {
  //     let price = item.querySelector('span.price').textContent;

  //     return {
  //       price: price.trim().replace(',', '.'),
  //     };
  //   });

  //   return products;
  // });

  await Product.update(
    {
      visitId: 1,
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
