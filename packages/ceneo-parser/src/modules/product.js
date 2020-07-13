import { BASE_URL } from '../config.js';
import { Product, Discount, Op } from '@bushidogames/db';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.0 Safari/537.36';

export const getPricePerEAN = async (page) => {
  await saveDiscounts();
  console.log('-------------------------------');
  const product = await getNextEAN();
  console.log('EAN - ', product.ean);

  await page.goto(`${BASE_URL}+${product.ean}`);
  await page.setUserAgent(USER_AGENT);
  const url = await page.url();

  const price = await parsePrices(page, url);
  console.log('ceneoPrice: ', price);

  const validatedPrice = await validatePrice(page, price, product);

  await updateProduct(price, product);

  if (shouldSearchNext(product.visitId)) {
    await getPricePerEAN(page);
  }
};

const getNextEAN = async () => {
  return Product.findOne({
    order: [['visitId', 'ASC']],
    attributes: ['ean', 'id', 'visitId', 'producer', 'price'],
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

const validatePrice = async (page, price, product) => {
  if (price === 0) {
    return 0;
  } else if (price / product.price > 0.5 || price / product.price < 0.5) {
    console.log(price);
    console.log(product.price);
    page.screenshot({
      path: `./src/screenshots/${product.ean}.jpg`,
      fullPage: true,
    });
  }
};

const updateProduct = async (price, product) => {
  const discount = await Discount.findOne({
    where: {
      producer: product.producer,
    },
    attributes: ['discount_range_max'],
  });

  product.regularQty = parseInt(4000 / price);
  product.discountQty = parseInt(4000 / product.price);
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

const saveDiscounts = async () => {
  await Discount.create({
    service: 'hurtzoo',
    producer: '8in1',
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Abart',
    discount_range_max: 27,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Abazoo',
    discount_range_max: 25,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Adbi',
    discount_range_max: 15,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Almo Nature',
    discount_range_max: 14,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Animal Lovers',
    discount_range_max: 17,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Animonda',
    discount_range_max: 15,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Applaws',
    discount_range_max: 17,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Aqua El',
    discount_range_max: 14,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Aqua Nova',
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Arion',
    discount_range_max: 14,
  });
};
