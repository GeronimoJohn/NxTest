/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { context } from './apollo/context'
import { schema } from './apollo/schema'

async function startApolloServer() {

  const server = new ApolloServer({ schema, context: context});
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () => console.log(`Server ready at http://localhost:3000${server.graphqlPath}`))
}

startApolloServer()