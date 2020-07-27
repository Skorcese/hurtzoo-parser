import { close, initBrowser, cron } from '@bushidogames/utils';
import { getPricePerEAN, getNextEAN } from './modules/product.js';

const main = async () => {
  if (await !getNextEAN()) {
    console.log('EAN not found, tring again in 5 seconds...');
    setTimeout(main, 5000);
    return;
  }

  const { browser, page } = await initBrowser();

  await getPricePerEAN(page);

  await close(browser);
};

cron(process.env.CRON, main);
