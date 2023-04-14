"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[792],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:99},l="Permission Models",d={unversionedId:"permission-mode",id:"permission-mode",title:"Permission Models",description:"|                     Request                     |   No directive   | Has @public | Has @authenticated |                     Has @hasPermissions                      |           Has @authenticated and @hasPermissions            |                  |",source:"@site/docs/permission-mode.md",sourceDirName:".",slug:"/permission-mode",permalink:"/graphql-citadel-website/docs/permission-mode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/permission-mode.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Bypass mode",permalink:"/graphql-citadel-website/docs/options/bypass-mode"},next:{title:"Further Readings",permalink:"/graphql-citadel-website/docs/future-readings"}},p={},c=[{value:"Examples",id:"examples",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"permission-models"},"Permission Models"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Request"),(0,i.kt)("th",{parentName:"tr",align:"center"},"No directive"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Has ",(0,i.kt)("inlineCode",{parentName:"th"},"@public")),(0,i.kt)("th",{parentName:"tr",align:"center"},"Has ",(0,i.kt)("inlineCode",{parentName:"th"},"@authenticated")),(0,i.kt)("th",{parentName:"tr",align:"center"},"Has ",(0,i.kt)("inlineCode",{parentName:"th"},"@hasPermissions")),(0,i.kt)("th",{parentName:"tr",align:"center"},"Has ",(0,i.kt)("inlineCode",{parentName:"th"},"@authenticated")," and ",(0,i.kt)("inlineCode",{parentName:"th"},"@hasPermissions")),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Anonymous"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ForbiddenError")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"AuthenticatedError")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"AuthenticatedError")," (",(0,i.kt)("inlineCode",{parentName:"td"},"permissionResolver")," will not be called)"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"AuthenticatedError"),"  (",(0,i.kt)("inlineCode",{parentName:"td"},"permissionResolver")," will not be called)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ForbiddenError"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Authenticated user and has enough permission(s)"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ForbiddenError")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Authenticated user and lacks permission(s)"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ForbiddenError")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ForbiddenError")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"ForbiddenError")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    user: User @authenticated # User needs to be logged in and it does not require any permissions\n\n    forgotToAddDirective: Version # No one can call this query. Secure as default :)\n\n    version: Version @public # Anyone can call this query\n}\n\ntype Mutation {\n    deleteUser(id: ID!) @hasPermissions(permissions: [ADMIN]) # Requires ADMIN permissions\n}\n")))}u.isMDXComponent=!0}}]);