import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/graphql-client';
import { List } from './components';

const App = () => (
  <ApolloProvider client={client}>
    <List />
  </ApolloProvider>
);

export default App;
