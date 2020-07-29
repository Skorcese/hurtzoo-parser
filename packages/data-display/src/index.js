import restify from 'restify';
import routes from './routes/index.js';
import { logger, DATA_DISPLAY } from '@bushidogames/utils';

const main = () => {
  const server = restify.createServer({ name: 'data-display' });
  server.use(restify.plugins.queryParser());
  routes(server);

  server.listen(3000, () =>
    logger.info(DATA_DISPLAY, 'Listening on port 3000...'),
  );
};

main();
