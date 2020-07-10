import restify from 'restify';
import Table from './Table/index.js';

const server = restify.createServer();

server.get('/', async (req, res, next) => {
  res.end(`<html><head></head><body>${await Table()}</body></html>`);
});

server.listen(3000, () => console.log('Listening on port 3000...'));
