'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _data = require('./data');

// SCHEMA DEFINITION
var typeDefs = '\ntype Query {\n  user(id: ID!): User\n}\ntype User {\n  id: ID!\n  name: String\n}';

// RESOLVERS
var resolvers = {
  Query: {
    user: function user(root, args, context, info) {
      return _data.data.find(function (item) {
        return item.id == args.id;
      });
    }
  }
};

// (EXECUTABLE) SCHEMA
exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});
//# sourceMappingURL=schema.js.map