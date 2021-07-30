(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/prisma-test/src/main.ts":
/*!**************************************!*\
  !*** ./apps/prisma-test/src/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const express = __webpack_require__(/*! express */ "express");
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const context_1 = __webpack_require__(/*! ./prisma/context */ "./apps/prisma-test/src/prisma/context.ts");
const schema_1 = __webpack_require__(/*! ./prisma/schema */ "./apps/prisma-test/src/prisma/schema.ts");
function startApolloServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const server = new apollo_server_express_1.ApolloServer({ schema: schema_1.schema, context: context_1.context });
        yield server.start();
        const app = express();
        server.applyMiddleware({ app });
        app.listen({ port: 3000 }, () => console.log(`Server ready at http://localhost:3000${server.graphqlPath}`));
    });
}
startApolloServer();


/***/ }),

/***/ "./apps/prisma-test/src/prisma/context.ts":
/*!************************************************!*\
  !*** ./apps/prisma-test/src/prisma/context.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const prisma = new client_1.PrismaClient();
exports.context = {
    prisma: prisma
};


/***/ }),

/***/ "./apps/prisma-test/src/prisma/schema.ts":
/*!***********************************************!*\
  !*** ./apps/prisma-test/src/prisma/schema.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_tools_1 = __webpack_require__(/*! graphql-tools */ "graphql-tools");
const graphql_scalars_1 = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
const typeDefs = `
type Mutation {
  createDraft(authorEmail: String!, data: PostCreateInput!): Post
  deletePost(id: Int!): Post
  incrementPostViewCount(id: Int!): Post
  signupUser(data: UserCreateInput!): User!
  togglePublishPost(id: Int!): Post
}

type Post {
  author: User
  content: String
  createdAt: DateTime!
  id: Int!
  published: Boolean!
  title: String!
  updatedAt: DateTime!
  viewCount: Int!
}

input PostCreateInput {
  content: String
  title: String!
}

input PostOrderByUpdatedAtInput {
  updatedAt: SortOrder!
}

type Query {
  allUsers: [User!]!
  draftsByUser(userUniqueInput: UserUniqueInput!): [Post]
  feed(orderBy: PostOrderByUpdatedAtInput, searchString: String, skip: Int, take: Int): [Post!]!
  postById(id: Int): Post
}

enum SortOrder {
  asc
  desc
}

type User {
  email: String!
  id: Int!
  name: String
  posts: [Post!]!
}

input UserCreateInput {
  email: String!
  name: String
  posts: [PostCreateInput!]
}

input UserUniqueInput {
  email: String
  id: Int
}

scalar DateTime
`;
const resolvers = {
    Query: {
        allUsers: (_parent, _args, context) => {
            return context.prisma.user.findMany();
        },
        postById: (_parent, args, context) => {
            return context.prisma.post.findUnique({
                where: { id: args.id || undefined }
            });
        },
        feed: (_parent, args, context) => {
            const or = args.searchString ? {
                OR: [
                    { title: { contains: args.searchString } },
                    { content: { contains: args.searchString } }
                ]
            } : {};
            return context.prisma.post.findMany({
                where: Object.assign({ published: true }, or),
                take: args === null || args === void 0 ? void 0 : args.take,
                skip: args === null || args === void 0 ? void 0 : args.skip,
                orderBy: args === null || args === void 0 ? void 0 : args.orderBy
            });
        },
        draftsByUser: (_parent, args, context) => {
            return context.prisma.user.findUnique({
                where: {
                    id: args.userUniqueInput.id || undefined,
                    email: args.userUniqueInput.email || undefined,
                },
            }).posts({
                where: {
                    published: false
                },
            });
        }
    },
    Mutation: {
        signupUser: (_parent, args, context) => {
            var _a;
            const postData = (_a = args.data.posts) === null || _a === void 0 ? void 0 : _a.map(post => {
                return { title: post.title, content: post.content || undefined };
            });
            return context.prisma.user.create({
                data: {
                    name: args.data.name,
                    email: args.data.email,
                    posts: {
                        create: postData
                    }
                },
            });
        },
        createDraft: (_parent, args, context) => {
            return context.prisma.post.create({
                data: {
                    title: args.data.title,
                    content: args.data.content,
                    author: {
                        connect: { email: args.authorEmail },
                    },
                },
            });
        },
        togglePublishPost: (_parent, args, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            try {
                const post = yield context.prisma.post.findUnique({
                    where: { id: args.id || undefined },
                    select: {
                        published: true
                    }
                });
                return context.prisma.post.update({
                    where: { id: args.id || undefined },
                    data: { published: !(post === null || post === void 0 ? void 0 : post.published) },
                });
            }
            catch (error) {
                throw new Error(`Post with ID ${args.id} does not exist in the database.`);
            }
        }),
        incrementPostViewCount: (_parent, args, context) => {
            return context.prisma.post.update({
                where: { id: args.id || undefined },
                data: {
                    viewCount: {
                        increment: 1
                    }
                },
            });
        },
        deletePost: (_parent, args, context) => {
            return context.prisma.post.delete({
                where: { id: args.id },
            });
        }
    },
    DateTime: graphql_scalars_1.DateTimeResolver,
    Post: {
        author: (parent, _args, context) => {
            return context.prisma.post.findUnique({
                where: { id: parent === null || parent === void 0 ? void 0 : parent.id }
            }).author();
        }
    },
    User: {
        posts: (parent, _args, context) => {
            return context.prisma.user.findUnique({
                where: { id: parent === null || parent === void 0 ? void 0 : parent.id }
            }).posts();
        }
    }
};
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder || (SortOrder = {}));
exports.schema = graphql_tools_1.makeExecutableSchema({
    resolvers,
    typeDefs,
});


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./apps/prisma-test/src/main.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johngeronimo/Developer/NxTest/nxtest/apps/prisma-test/src/main.ts */"./apps/prisma-test/src/main.ts");


/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-scalars":
/*!**********************************!*\
  !*** external "graphql-scalars" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-scalars");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map