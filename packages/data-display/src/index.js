import restify from 'restify';
import routes from './routes/index.js';
import { cron } from '@bushidogames/utils';

const main = () => {
  const server = restify.createServer({ name: 'data-display' });
  server.use(restify.plugins.queryParser());
  routes(server);

  server.listen(3000, () => console.log('Listening on port 3000...'));
};

main();
