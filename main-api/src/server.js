// import polyfill for regeneratorRuntime in introspection.js
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { mergeSchemas } from 'graphql-tools';
import { getIntrospectSchema } from './introspection';

const app = express();

const PORT = process.env.PORT || 8081;

//our graphql endpoints
const endpoints = [
  'http://localhost:8082/graphql',
  'http://localhost:8083/graphql'
];
//async function due to the async nature of grabbing all of our introspect schemas
(async () => {
  try {
    //promise.all to grab all remote schemas at the same time, we do not care what order they come back but rather just when they finish
    const allSchemas = await Promise.all(
      endpoints.map(ep => getIntrospectSchema(ep))
    );
    //create function for /graphql endpoint and merge all the schemas
    app.use(
      '/graphql',
      bodyParser.json(),
      graphqlExpress({ schema: mergeSchemas({ schemas: allSchemas }) })
    );
    //start up a graphql endpoint for our main server
    app.listen(PORT, () =>
      console.log('Main API GraphQL API listening on port:' + PORT)
    );
  } catch (error) {
    console.log('ERROR: Failed to grab introspection queries', error);
  }
})();
