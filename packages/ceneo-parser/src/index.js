import { close, init } from 'utils/puppeteer/index.js';
import { sequelize } from 'db';
import { getPricePerEAN } from './modules/product.js';

(async () => {
  await sequelize.sync({ force: false });
  const { browser, page } = await init({
    headless: false,
  });

  await getPricePerEAN(page);

  await close(browser);
})();
