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

const { authzDirective, authzDirectiveTransformer } = citadelDirective({
    authenticationResolver
})
```
