import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import schema from './schema';

const app = express();

const PORT = process.env.PORT1 || 8082;

app.use('/', (req, res) => {
  res.send(`PORT ${PORT} is listening!`);
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT, () =>
  console.log('Service 1 GraphQL listening on port:' + PORT)
);
