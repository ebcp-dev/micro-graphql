'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _graphqlTools = require('graphql-tools');

var _introspection = require('./introspection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // import polyfill for regeneratorRuntime in introspection.js


var app = (0, _express2.default)();

var PORT = process.env.PORT || 8081;

//our graphql endpoints
var endpoints = ['http://localhost:8082/graphql', 'http://localhost:8083/graphql'];
//async function due to the async nature of grabbing all of our introspect schemas
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var allSchemas;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Promise.all(endpoints.map(function (ep) {
            return (0, _introspection.getIntrospectSchema)(ep);
          }));

        case 3:
          allSchemas = _context.sent;

          //create function for /graphql endpoint and merge all the schemas
          app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: (0, _graphqlTools.mergeSchemas)({ schemas: allSchemas }) }));
          //start up a graphql endpoint for our main server
          app.listen(PORT, function () {
            return console.log('Main API GraphQL API listening on port:' + PORT);
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);

          console.log('ERROR: Failed to grab introspection queries', _context.t0);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[0, 8]]);
}))();
//# sourceMappingURL=server.js.map