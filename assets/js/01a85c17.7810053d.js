"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13],{4118:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),n=a(6010),r=a(8277),s=a(9960),c=a(5999);const i="sidebar_TMXw",m="sidebarItemTitle_V4zb",o="sidebarItemList_uHd5",u="sidebarItem_spIe",g="sidebarItemLink_eqrF",b="sidebarItemLinkActive_XZSJ";function E(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(o,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:b},e.title)))))))}var d=a(3102);function p(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return l.createElement(d.Zo,{component:p,props:e})}var k=a(7524);function v(e){let{sidebar:t}=e;const a=(0,k.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(h,{sidebar:t}):l.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},3881:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),n=a(4118),r=a(7774),s=a(5999);const c="tag_Shcx";function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}var o=a(1944),u=a(5281),g=a(4739),b=a(6010);function E(e){let{tags:t,sidebar:a}=e;const r=(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(o.FG,{className:(0,b.Z)(u.k.wrapper.blogPages,u.k.page.blogTagsListPage)},l.createElement(o.d,{title:r}),l.createElement(g.Z,{tag:"blog_tags_list"}),l.createElement(n.Z,{sidebar:a},l.createElement("h1",null,r),l.createElement(m,{tags:t})))}},7774:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(6010),r=a(9960);const s="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?i:c)},a,m&&l.createElement("span",null,m))}}}]);