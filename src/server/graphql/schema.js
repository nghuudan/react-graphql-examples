import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Hello {
    message: String
  }

  type Color {
    id: Int!
    name: String!
  }

  input ColorInput {
    name: String!
  }

  type Query {
    hello: Hello
    color(id: Int!): Color
    colorList: [Color]
  }

  type Mutation {
    addColor(color: ColorInput!): Color
    removeColor(id: Int!): Int
  }
`;

export default makeExecutableSchema({
  resolvers,
  typeDefs
});
