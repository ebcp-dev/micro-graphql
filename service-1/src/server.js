import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();

const PORT = process.env.PORT || 8082;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT, () =>
  console.log('Service 1 GraphQL listening on port:' + PORT)
);
