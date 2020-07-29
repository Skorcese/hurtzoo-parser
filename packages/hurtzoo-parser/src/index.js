import {
  close,
  initBrowser,
  logger,
  HURTZOO_PARSER,
} from '@bushidogames/utils';
import { sequelize } from '@bushidogames/db';
import {
  getCategories,
  getNextCategoryUrl,
  openNextCategory,
  storeCategories,
  updateCategoryVisitId,
  setProductsPerPageCookie,
} from './modules/categories.js';
import { getProducts, storeProducts } from './modules/products.js';
import { saveInitialDiscounts } from './modules/discount.js';

const main = async () => {
  await sequelize.sync({ force: process.env.SYNC_DB === 'true' });
  await saveInitialDiscounts();
  const { browser, page } = await initBrowser({
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
    logger.info(
      HURTZOO_PARSER,
      'Getting products from category: ',
      category.localId,
    );
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
