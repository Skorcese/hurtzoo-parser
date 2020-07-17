import restify from 'restify';
import routes from './routes/index.js';

const server = restify.createServer({ name: 'data-display' });

routes(server);

server.listen(3000, () => console.log('Listening on port 3000...'));
