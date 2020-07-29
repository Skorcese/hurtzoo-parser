import {
  close,
  initBrowser,
  cron,
  logger,
  CENEO_PARSER,
} from '@bushidogames/utils';
import { getPricePerEAN, getNextEAN } from './modules/product.js';

const main = async () => {
  const product = await getNextEAN();
  if (!product) {
    logger.info(CENEO_PARSER, 'EAN not found, trying again in 60 seconds...');
    setTimeout(main, 60000);
    return;
  }

  const { browser, page } = await initBrowser();

  await getPricePerEAN(page);

  await close(browser);
};

main();
cron(process.env.CRON, main);
