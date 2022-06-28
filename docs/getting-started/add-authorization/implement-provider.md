---
sidebar_position: 2
---

# Implement Resolver

Implement a resolver that returns the user permission(s).

```typescript
// graphql-citadel will check if the  user has permission that is declared at @hasPermission
async function authorizationResolver({context}): Promise<string> {
    const { user } = context
    const permission = await getUserPermission(user)
    return permission
}

const { citadelDirective, citadelDirectiveTransformer } = citadelDirective({
    authorizationResolver
})
```
