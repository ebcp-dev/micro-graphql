'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntrospectSchema = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _graphqlTools = require('graphql-tools');

var _apolloLinkHttp = require('apollo-link-http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getIntrospectSchema = exports.getIntrospectSchema = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var makeDatabaseServiceLink, databaseServiceSchemaDefinition;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Create a link to a GraphQL instance by passing fetch instance and url
            makeDatabaseServiceLink = function makeDatabaseServiceLink() {
              return (0, _apolloLinkHttp.createHttpLink)({
                uri: url,
                fetch: _nodeFetch2.default
              });
            };

            // Fetch our schema


            _context.next = 3;
            return (0, _graphqlTools.introspectSchema)(makeDatabaseServiceLink());

          case 3:
            databaseServiceSchemaDefinition = _context.sent;
            return _context.abrupt('return', (0, _graphqlTools.makeRemoteExecutableSchema)({
              schema: databaseServiceSchemaDefinition,
              link: makeDatabaseServiceLink()
            }));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getIntrospectSchema(_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=introspection.js.map