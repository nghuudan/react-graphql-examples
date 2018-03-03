import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/graphql-client';

const App = () => (
  <ApolloProvider client={client}>
    <h1>Hello!</h1>
  </ApolloProvider>
);

export default App;
