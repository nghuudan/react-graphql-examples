import { ApolloClient } from 'apollo-client';
import client from './graphql-client';

describe('GraphQL Client', () => {
  it('should be an ApolloClient', () => {
    expect(client).toBeInstanceOf(ApolloClient);
  });
});
