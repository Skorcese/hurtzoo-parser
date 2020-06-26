import dotenv from 'dotenv';
import { close, init } from './puppeteerUtils/index.js';
import { sequelize } from './db/index.js';
import {
  getCategories,
  getNextCategoryUrl,
  openNextCategory,
  storeCategories,
  updateCategoryVisitId,
  setProductsPerPageCookie,
} from './modules/categories.js';
import { getProducts, storeProducts } from './modules/products.js';

dotenv.config();

const main = async () => {
  await sequelize.sync({ force: false });
  const { browser, page } = await init({
    headless: false,
  });

  // await login(page);
  const categories = await getCategories(page);
  await storeCategories(categories);

  await setProductsPerPageCookie(page);
  await loopThroughCategories(page);

  await page.waitFor(3600 * 60 * 60);
  close(browser);
};

const loopThroughCategories = async (page, minVisitId) => {
  const category = await getNextCategoryUrl();
  const { visitId } = category;
  const shouldCheckNextCategory =
    minVisitId === undefined || visitId <= minVisitId;

  const isOpened = await openNextCategory(page, category);
  if (isOpened) {
    console.log('Getting products from category: ', category.localId);
    const products = await getProducts(page);
    await storeProducts(products);

    if (products.length > 0) {
      await updateCategoryVisitId(category);
    }
  }

  if (shouldCheckNextCategory) {
    return loopThroughCategories(page, visitId);
  }
};

main();
