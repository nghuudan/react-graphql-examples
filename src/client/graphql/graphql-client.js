import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'unfetch';

export default new ApolloClient({
  link: createHttpLink({ fetch, uri: '/graphql' }),
  cache: new InMemoryCache()
});
