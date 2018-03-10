import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import typeDefs from './typedefs.graphql';

export default makeExecutableSchema({
  resolvers,
  typeDefs
});
