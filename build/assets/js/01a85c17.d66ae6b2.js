"use strict";(self.webpackChunksamtools_cshome=self.webpackChunksamtools_cshome||[]).push([[13],{5601:function(e,a,t){t.d(a,{Z:function(){return b}});var r=t(7294),n=t(6010),s=t(6742),l="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",o="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",g=t(4973);function b(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("nav",{className:(0,n.Z)(l,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},a.title),r.createElement("ul",{className:c},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:u},e.title))}))))}},94:function(e,a,t){t.r(a);var r=t(7294),n=t(6016),s=t(6742),l=t(5601),i=t(4973),c=t(9306);a.default=function(e){var a=e.tags,t=e.sidebar,m=(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),o={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);o[a]=o[a]||[],o[a].push(e)}));var u=Object.entries(o).sort((function(e,a){var t=e[0],r=a[0];return t.localeCompare(r)})).map((function(e){var t=e[0],n=e[1];return r.createElement("article",{key:t},r.createElement("h2",null,t),n.map((function(e){return r.createElement(s.Z,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(n.Z,{title:m,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(l.Z,{sidebar:t})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,m),r.createElement("section",{className:"margin-vert--lg"},u)))))}}}]);