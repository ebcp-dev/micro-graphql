import fetch from 'node-fetch';
import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import { createHttpLink } from 'apollo-link-http';

export const getIntrospectSchema = async url => {
  // Create a link to a GraphQL instance by passing fetch instance and url
  const makeDatabaseServiceLink = () =>
    createHttpLink({
      uri: url,
      fetch
    });

  // Fetch our schema
  const databaseServiceSchemaDefinition = await introspectSchema(
    makeDatabaseServiceLink()
  );

  // make an executable schema
  return makeRemoteExecutableSchema({
    schema: databaseServiceSchemaDefinition,
    link: makeDatabaseServiceLink()
  });
};
