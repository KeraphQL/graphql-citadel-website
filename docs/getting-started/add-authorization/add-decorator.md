---
sidebar_position: 1
---

# Add GraphQL Directive

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

## 1. (Optional) Define `directive`

Let's say, you want to only the admins to create a book. In that case, you can declare the directive `@hasPermission` as below.

```graphql
enum Permission {
    CREATE
    READ
}

directive @hasPermissions(permissions: [Permission]) on FIELD_DEFINITION
```

## 2. Assign the directive

```graphql
type Mutation {
    // Only users that has CREATE permission can call this API
    createBook (book: BookInput): Book @hasPermissions(permissions: [CREATE])
}
```

## 3. Add schema transformer and type definitions

```typescript
const { citadelDirectiveTypeDefs, citadelDirectiveTransformer } = citadelDirective({
    permissionResolver: // ... see the next page
})

let schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    authDirectiveTypeDefs
  ],
  resolvers
})

schema = authDirectiveTransformer(schema)

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
});

// ...
```
