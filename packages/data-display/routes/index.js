import Table from '../Table/index.js';

export default (server) => {
  server.get('/', async (req, res, next) => {
    res.end(`<html><head></head><body>${await Table()}</body></html>`);
    return next();
  });
};
