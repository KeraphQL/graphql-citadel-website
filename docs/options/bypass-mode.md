---
sidebar_position: 2
---

# Bypass mode

In some cases like local development, you want to bypass the authentication and authorization.

```ts
const { citadelDirective, citadelDirectiveTransformer } = citadelDirective({
    ...,
    bypass: true
})
```

Defaults to <code>false</code>.
