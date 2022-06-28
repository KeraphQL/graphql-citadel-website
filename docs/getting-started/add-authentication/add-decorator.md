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

## 1. Define `directive`

Let's say, you want the login-ed users to only query the book resource. In that case, you can declare the directive `@authenticated` as below.

```graphql
directive @authenticated ON OBJECT_FIELD
```

## 2. Assign the directive

```graphql
type Query {
    book: [Book!] @authenticated
}
```

## 3. Add schema transformer and type definitions

```typescript
const { citadelDirective, citadelDirectiveTrasformer } = citadelDirective({
    resolver: // ... see Step 4
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
