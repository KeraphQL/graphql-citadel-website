---
sidebar_position: 1
---

# Allow by default

By default, GraphQL Citadel blocks operation if there are no schema directives configured. This is known as "Deny-by-Default".
But if you want to allow it, please configure <code>denyByDefault</code> to <code>false</code>

```ts
const { citadelDirective, citadelDirectiveTransformer } = citadelDirective({
    ...,
    denyByDefault: false
})
```

Defaults to <code>false</code>.
