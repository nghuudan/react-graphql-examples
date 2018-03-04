import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/graphql-client';
import Hello from './components/hello/hello';

const App = () => (
  <ApolloProvider client={client}>
    <Hello />
  </ApolloProvider>
);

export default App;
