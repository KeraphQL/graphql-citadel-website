---
sidebar_position: 1
---

# Define GraphQL Directive

`graphql-citadel` is powered by GraphQL Schema directives. You will first add a schema directory to your schema.

Our initial schema is below:

```graphql
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
    books: [Book!]
}
```

## 1. Assign the directive

Add the directive to your queries or mutations.

```graphql
type Query {
    book: [Book!] @authenticated
}
```

## 2. Add schema transformer and type definitions

```typescript
const { citadelDirective, citadelDirectiveTrasformer } = citadelDirective({
    authenticationResolver: // ... see the next page for details
})

let schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    citadelDirectiveTypeDefs
  ],
  resolvers
})

schema = citadelDirectiveTransformer(schema)

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
});

// ...
```

Next, you need to implement the authentication resolver.
