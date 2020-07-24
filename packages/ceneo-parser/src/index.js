import { close, initBrowser, cron } from '@bushidogames/utils';
import { getPricePerEAN } from './modules/product.js';

const main = async () => {
  const { browser, page } = await initBrowser();

  await getPricePerEAN(page);

  await close(browser);
};

cron(process.env.CRON, main);
