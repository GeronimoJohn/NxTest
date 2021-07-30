

# Nxtest

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Extensible Build Framework**

**A test repository trying out our new back end tech stack plus Express**

A repository for testing out Prisma, PostgreSql, Apollo Server, GraphQl, and Express all in the NX build framework

### Database Connection

This repository is currently connected to a local database through PostgreSql which is managed by Prisma

To connect to your local database

Go to the `scheme.prisma` file which is found in the `prisma` folder

Enter your `database url` to set up the connection to your database

## Create and Seed the database

Run the following command to create your PostgreSql database file. This also create the `user` and `post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

`npx prisma migrate dev --name init`

Now, see the database with the sample data in [`prisma/seed.ts`](./prisma/seed.ts) by running the following command:

`npx prisma db seed --preview-feature`

### Start Apollo Server

Run `nx serve prisma-test` in the command line

### GraphQL

Copy query below to test in the apollo server

```graphql
query ExampleQuery {
  feed {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

### Start Prisma Studio

Run `npx prisma studio` in the command line

If the database is up - you can create, read, update, or delete the data 


## More CLI Commands and NX information


## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nxtest/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
