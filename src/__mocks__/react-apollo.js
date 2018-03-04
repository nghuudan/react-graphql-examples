export const ApolloProvider = jest.fn((props) => props.children);
export const graphql = jest.fn(() => jest.fn((Component) => Component));
export default { ApolloProvider, graphql };
