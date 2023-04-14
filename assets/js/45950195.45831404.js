"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[511],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8563:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:1},d="Add GraphQL Directive",s={unversionedId:"getting-started/add-authentication/add-decorator",id:"getting-started/add-authentication/add-decorator",title:"Add GraphQL Directive",description:"graphql-citadel is powered by GraphQL Schema directives. You will first add a schema directory to your schema.",source:"@site/docs/getting-started/add-authentication/add-decorator.md",sourceDirName:"getting-started/add-authentication",slug:"/getting-started/add-authentication/add-decorator",permalink:"/graphql-citadel-website/docs/getting-started/add-authentication/add-decorator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/add-authentication/add-decorator.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Add Authentication",permalink:"/graphql-citadel-website/docs/category/add-authentication"},next:{title:"Implement Resolver",permalink:"/graphql-citadel-website/docs/getting-started/add-authentication/implement-provider"}},l={},u=[{value:"1. Assign the directive",id:"1-assign-the-directive",level:2},{value:"2. Add schema transformer and type definitions",id:"2-add-schema-transformer-and-type-definitions",level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-graphql-directive"},"Add GraphQL Directive"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-citadel")," is powered by GraphQL Schema directives. You will first add a schema directory to your schema."),(0,i.kt)("p",null,"Our initial schema is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Book {\n    title: String\n    author: String\n}\n\ninput BookInput {\n    title: String!\n}\n\ntype Mutation {\n    createBook (book: BookInput): Book\n}\n\ntype Query {\n    books: [Book!]\n}\n")),(0,i.kt)("h2",{id:"1-assign-the-directive"},"1. Assign the directive"),(0,i.kt)("p",null,"Add the directive to your queries or mutations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    book: [Book!] @authenticated\n}\n")),(0,i.kt)("h2",{id:"2-add-schema-transformer-and-type-definitions"},"2. Add schema transformer and type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const { citadelDirective, citadelDirectiveTrasformer } = citadelDirective({\n    authenticationResolver: // ... see the next page for details\n})\n\nlet schema = makeExecutableSchema({\n  typeDefs: [\n    typeDefs,\n    citadelDirectiveTypeDefs\n  ],\n  resolvers\n})\n\nschema = citadelDirectiveTransformer(schema)\n\nconst server = new ApolloServer({\n  schema,\n  csrfPrevention: true,\n});\n\n// ...\n")),(0,i.kt)("p",null,"Next, you need to implement the authentication resolver."))}m.isMDXComponent=!0}}]);