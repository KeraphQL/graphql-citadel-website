"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,d=c["".concat(s,".").concat(f)]||c[f]||y[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Your First Apollo Server",l={unversionedId:"getting-started/your-first-apollo-server",id:"getting-started/your-first-apollo-server",title:"Your First Apollo Server",description:"After installing the module, you are ready to implement for your authorization layer to your GraphQL server.",source:"@site/docs/getting-started/your-first-apollo-server.md",sourceDirName:"getting-started",slug:"/getting-started/your-first-apollo-server",permalink:"/graphql-citadel-website/docs/getting-started/your-first-apollo-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/your-first-apollo-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/graphql-citadel-website/docs/category/getting-started"},next:{title:"Installation",permalink:"/graphql-citadel-website/docs/getting-started/installation"}},s={},p=[{value:"Initial Apollo Server",id:"initial-apollo-server",level:2}],u={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"your-first-apollo-server"},"Your First Apollo Server"),(0,o.kt)("p",null,"After installing the module, you are ready to implement for your authorization layer to your GraphQL server."),(0,o.kt)("h2",{id:"initial-apollo-server"},"Initial Apollo Server"),(0,o.kt)("p",null,"To show how to implement authorization, here is our first Book API application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApolloServer, gql } from 'apollo-server'\nimport { authDirective } from '../src/authz'\nimport { makeExecutableSchema } from '@graphql-tools/schema'\nimport { GraphQLFieldResolver, GraphQLResolveInfo } from 'graphql';\n\nconst typeDefs = gql`\n  type Book {\n    title: String\n    author: String\n  }\n\n  input BookInput {\n    title: String!\n  }\n\n  type Mutation {\n    createBook (book: BookInput): Book\n  }\n\n  type Query {\n    books: [Book]\n  }\n`;\n\ninterface Book {\n    title: string\n    author: string\n}\n\nconst resolvers = {\n  Query: {\n    books: async (parent: any, args: any, context: any, info: any): Promise<[]Book> => {\n      return [{title: 'Authentication and Authorization',author: 'Keke'}]\n    },\n  },\n  Mutation: {\n    createBook: async (parent: any, args: any, context: any, info: any): Promise<void> => {\n       // Run DB query\n       return\n    }\n  }\n};\n\nlet schema = makeExecutableSchema({\n  typeDefs,\n  resolvers\n})\n\nconst server = new ApolloServer({\n  schema,\n  csrfPrevention: true,\n});\n\nserver.listen().then(({ url }) => {\n  console.log(`\ud83d\ude80  Server ready at ${url}`);\n});\n")))}y.isMDXComponent=!0}}]);