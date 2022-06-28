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
    books: [Book]
}
```

## 1. Define `directive`

Let's say, you want to only the admins to create a book. In that case, you can declare the directive `@hasPermission` as below.

```graphql
enum Permission {
    CREATE
    READ
}

directive @hasPermission(permission: Permission) ON OBJECT_FIELD
```

## 2. Assign the directive

```graphql
type Mutation {
    // Only users that has CREATE permission can call this API
    createBook (book: BookInput): Book @hasPermission(permission: CREATE)
}
```

## 3. Add schema transformer and type definitions

```typescript
const { authzDirective, authzDirectiveTrasformer } = authDirective({
    resolver: // ... see Step 4
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

## 4. Implement the resolver

Implement a resolver that returns the user permission(s).

```typescript
// graphql-citadel will check if the  user has permission that is declared at @hasPermission
async function resolver({context}): Promise<string> {
    const { user } = context
    const permission = await getUserPermission()
    return permission
}

const { authzDirective, authzDirectiveTransformer } = authDirective({
    resolver
})
```
