---
sidebar_position: 1
---

# Your First Apollo Server

After installing the module, you are ready to implement for your authorization layer to your GraphQL server.

## Initial Apollo Server

To show how to implement authorization, here is our first Book API application.

```typescript
import { ApolloServer, gql } from 'apollo-server'
import { authDirective } from '../src/authz'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLFieldResolver, GraphQLResolveInfo } from 'graphql';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  input BookInput {
    title: String!
  }

  type Mutation {
    createBook (book: BookInput): Book
  }

  type Query {
    books: [Book]
  }
`;

interface Book {
    title: string
    author: string
}

const resolvers = {
  Query: {
    books: async (parent: any, args: any, context: any, info: any): Promise<[]Book> => {
      return [{title: 'Authentication and Authorization',author: 'Keke'}]
    },
  },
  Mutation: {
    createBook: async (parent: any, args: any, context: any, info: any): Promise<void> => {
       // Run DB query
       return
    }
  }
};

let schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
```
