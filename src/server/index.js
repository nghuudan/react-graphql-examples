import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import health from './health';
import schema from './graphql/schema';

const server = express();
server.use(cors());
server.use(morgan('dev'));
server.get('*', express.static(path.join('dist', 'public')));
server.get('/health', health);
server.get('/graphiql', graphiqlExpress({ endpoint: '/graphql' }));
server.post('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.listen(4444);

export default server;
