import { makeExecutableSchema } from 'graphql-tools';
import { data } from './data';

// SCHEMA DEFINITION
const typeDefs = `
type Query {
  article(id: ID!): Article
}
type Article {
  id: ID!
  title: String
  url: String
}`;

// RESOLVERS
const resolvers = {
  Query: {
    article: (root, args, context, info) => {
      return data.find(item => item.id == args.id);
    }
  }
};

// (EXECUTABLE) SCHEMA
export default makeExecutableSchema({
  typeDefs,
  resolvers
});
