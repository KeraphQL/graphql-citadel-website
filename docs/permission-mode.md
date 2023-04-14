---
sidebar_position: 99
---

# Permission Models

|                     Request                     |   No directive   | Has `@public` | Has `@authenticated` |                     Has `@hasPermissions`                      |           Has `@authenticated` and `@hasPermissions`            |                  |
| :---------------------------------------------- | :--------------: | :-----------: | :------------------: | :------------------------------------------------------------: | :-------------------------------------------------------------: | ---------------- |
| Anonymous                                       | `ForbiddenError` |       ✅       | `AuthenticatedError` | `AuthenticatedError` (`permissionResolver` will not be called) | `AuthenticatedError`  (`permissionResolver` will not be called) | `ForbiddenError` |
| Authenticated user and has enough permission(s) | `ForbiddenError` |       ✅       |          ✅           |                               ✅                                |                                ✅                                |                  |
| Authenticated user and lacks permission(s)      | `ForbiddenError` |       ✅       |          ✅           |                        `ForbiddenError`                        |                        `ForbiddenError`                         |                  |

## Examples

```graphql
type Query {
    user: User @authenticated # User needs to be logged in and it does not require any permissions

    forgotToAddDirective: Version # No one can call this query. Secure as default :)

    version: Version @public # Anyone can call this query
}

type Mutation {
    deleteUser(id: ID!) @hasPermissions(permissions: [ADMIN]) # Requires ADMIN permissions
}
```
