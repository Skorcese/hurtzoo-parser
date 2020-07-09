import { close, initBrowser } from '@bushidogames/utils';
import { getPricePerEAN } from './modules/product.js';

// dotenv.config({
//   path: `${path.dirname(require.resolve('@bushidogames/ceneo-parser'))}/.env`,
// });

(async () => {
  const { browser, page } = await initBrowser();

  await getPricePerEAN(page);

  await close(browser);
})();
