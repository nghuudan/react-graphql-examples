import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress } from 'apollo-server-express';
import health from './health';

const server = express();
server.use(cors());
server.get('/health', health);
server.post('/graphql', bodyParser.json(), graphqlExpress({}));
server.listen(4444);

export default server;
