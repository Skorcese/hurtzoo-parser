import { close, initBrowser, cron } from '@bushidogames/utils';
import { getPricePerEAN, getNextEAN } from './modules/product.js';

const main = async () => {
  const product = await getNextEAN();
  if (!product) {
    console.log('EAN not found, trying again in 20 seconds...');
    setTimeout(main, 20000);
    return;
  }

  const { browser, page } = await initBrowser();

  await getPricePerEAN(page);

  await close(browser);
};

main();
cron(process.env.CRON, main);
