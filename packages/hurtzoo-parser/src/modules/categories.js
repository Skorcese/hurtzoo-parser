import { DEFAULT_SERVICE, BASE_URL, USER_AGENT } from '../config.js';
import { Category } from '@bushidogames/db';
import { logger, HURTZOO_PARSER } from '@bushidogames/utils';

export const setProductsPerPageCookie = async (page) => {
  return page.$eval('.categories-ajax', () => {
    document.cookie = document.cookie.replace(/rc2c-pop=24/, 'rc2c-pop=96');
  });
};

export const openNextCategory = async (page, category) => {
  await page.goto(`${BASE_URL}${category.url}`);

  try {
    await page.waitFor('article.product-inside', { timeout: 5000 });
    return true;
  } catch (e) {
    logger.info(
      HURTZOO_PARSER,
      `Category not found, Removing from database: ${category.url} ${category.localId}`,
    );
    await category.destroy();
    return false;
  }
};

export const updateCategoryVisitId = async (category) => {
  category.visitId += 1;
  return category.save();
};

export const getCategories = async (page) => {
  await page.setUserAgent(USER_AGENT);

  try {
    await page.goto(BASE_URL, {
      waitUntil: 'load',
      timeout: 0,
    });
  } catch (error) {
    loggger.warn(HURTZOO_PARSER, 'Navigation error, restarting process...');
    process.exit(1);
  }
  await page.waitForSelector('.categories-ajax li');

  return page.$eval('.categories-ajax', (container) => {
    const links = [...container.querySelectorAll('li a')];

    return links.map((link) => {
      return {
        name: link.innerText,
        url: link.getAttribute('href'),
      };
    });
  });
};

export const storeCategories = async (allCategories) => {
  const promises = allCategories.map((category) => {
    const { name, url } = category;

    return Category.findOrCreate({
      where: { localId: name },
      defaults: {
        url,
        localId: name,
        service: DEFAULT_SERVICE,
        visitId: 0,
      },
    });
  });
  const categories = await Promise.all(promises);
  const createdCategories = categories.filter(([_cat, isCreated]) => isCreated);

  logger.info(
    HURTZOO_PARSER,
    `Found ${allCategories.length} categories. Stored ${createdCategories.length} new entries in the db.`,
  );

  return categories;
};

export const getNextCategoryUrl = async () => {
  return Category.findOne({
    limit: 1,
    order: [['visitId', 'ASC']],
  });
};
