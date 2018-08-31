import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import schema from './schema';

const app = express();

const PORT = process.env.PORT || 8083;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT, () =>
  console.log('Service 2 GraphQL listening on port:' + PORT)
);
