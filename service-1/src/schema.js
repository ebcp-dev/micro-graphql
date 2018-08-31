import { makeExecutableSchema } from 'graphql-tools';
import { data } from './data';

// SCHEMA DEFINITION
const typeDefs = `
type Query {
  user(id: ID!): User
}
type User {
  id: ID!
  name: String
}`;

// RESOLVERS
const resolvers = {
  Query: {
    user: (root, args, context, info) => {
      return data.find(item => item.id == args.id);
    }
  }
};

// (EXECUTABLE) SCHEMA
export default makeExecutableSchema({
  typeDefs,
  resolvers
});
