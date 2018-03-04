export default {
  Query: {
    hello: () => Promise.resolve({ message: 'Hello, World!' })
  }
};
