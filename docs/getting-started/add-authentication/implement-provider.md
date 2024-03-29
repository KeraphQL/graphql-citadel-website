---
sidebar_position: 2
---

# Implement Resolver

Implement a resolver that returns the user permission(s).

```typescript
// graphql-citadel will check if the user is logged in if the query of mutation has @authenticated
async function authenticationResolver({context}): Promise<boolean> {
    const { user } = context
    return !!user
}

const { citadelDirectiveTypeDefs, citadelDirectiveTransformer } = citadelDirective({
    authenticationResolver
})
```

That's it! Now, all the queries or mutations which has `@authenticated` requires users to be authenticated.
