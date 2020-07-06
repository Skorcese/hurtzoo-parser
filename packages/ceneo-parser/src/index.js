import { close, initBrowser } from '@bushidogames/utils';
import { getPricePerEAN } from './modules/product.js';

(async () => {
  const { browser, page } = await initBrowser({
    headless: false,
  });

  await getPricePerEAN(page);

  await close(browser);
})();
