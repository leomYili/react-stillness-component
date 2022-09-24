"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{78665:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(63366),l=a(67294),r=a(86010),i=a(32600),o=a(39960),s="sidebar_a9qW",c="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(95999);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];function b(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),c=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},c&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},38561:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(67294),l=a(86010),r=a(95999),i=a(39960),o=a(44996),s=a(5979),c=a(18780),m=a(64269),u=a(86753),d="blogPostTitle_rzP5",g="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",v=a(20062),h="image_o0gy";function b(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function E(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL,o=t.email,s=r||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(b,{href:s},n.createElement("img",{className:h,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function k(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?N:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?_:f),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function Z(e){var t,a,h=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,o.C)().withBaseUrl,E=e.children,f=e.frontMatter,N=e.assets,_=e.metadata,Z=e.truncated,P=e.isBlogPostPage,y=void 0!==P&&P,L=_.date,C=_.formattedDate,I=_.permalink,T=_.tags,x=_.readingTime,w=_.title,A=_.editUrl,B=_.authors,M=null!=(t=N.image)?t:f.image,H=!y&&Z,R=T.length>0,U=y?"h1":"h2";return n.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(U,{className:d,itemProp:"headline"},y?w:n.createElement(i.Z,{itemProp:"url",to:I},w)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},C),void 0!==x&&n.createElement(n.Fragment,null," \xb7 ",h(x))),n.createElement(k,{authors:B,assets:N})),M&&n.createElement("meta",{itemProp:"image",content:b(M,{absolute:!0})}),n.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,E)),(R||Z)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",y&&p)},R&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":H})},n.createElement(v.Z,{tags:T})),y&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:A})),H&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":R})},n.createElement(i.Z,{to:_.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},39360:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(67294),l=a(78665),r=a(38561),i=a(87462),o=a(95999),s=a(71750);function c(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,(0,i.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,(0,i.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var m=a(5979),u=a(51575),d=a(86010);function g(e){var t,a=e.content,l=a.assets,r=a.metadata,i=r.title,o=r.description,s=r.date,c=r.tags,u=r.authors,d=r.frontMatter,g=d.keywords,p=null!=(t=l.image)?t:d.image;return n.createElement(m.d,{title:i,description:o,keywords:g,image:p},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&n.createElement("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")}))}function p(e){var t=e.content,a=e.sidebar,i=t.assets,o=t.metadata,s=o.nextItem,m=o.prevItem,d=o.frontMatter,g=d.hide_table_of_contents,p=d.toc_min_heading_level,v=d.toc_max_heading_level;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(u.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v}):void 0},n.createElement(r.Z,{frontMatter:d,assets:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(s||m)&&n.createElement(c,{nextItem:s,prevItem:m}))}function v(e){return n.createElement(m.FG,{className:(0,d.Z)(m.kM.wrapper.blogPages,m.kM.page.blogPostPage)},n.createElement(g,e),n.createElement(p,e))}},51575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),l=a(63366),r=a(67294),i=a(86010),o=a(25002),s="tableOfContents_cNA8",c=["className"];function m(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(63366),r=a(67294),i=a(5979),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,o),b=(0,i.LU)(),E=null!=p?p:b.tableOfContents.minHeadingLevel,f=null!=v?v:b.tableOfContents.maxHeadingLevel,N=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),_=(0,r.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[u,g,E,f]);return(0,i.Si)(_),r.createElement(s,(0,n.Z)({toc:N,className:c,linkClassName:u},h))}},20819:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(87462),l=a(67294),r=a(86010),i=a(23746),o=a(5979),s=a(97413),c="codeBlockContainer_X7hc",m="codeBlockContent_vqWU",u="codeBlockTitle_B2tn",d="codeBlock_wPnj",g="codeBlockStandalone_LFTq",p="codeBlockLines_fQUY";function v(e){var t,a=e.children,v=e.className,h=void 0===v?"":v,b=e.metastring,E=e.title,f=e.language,N=(0,o.LU)().prism,_=(0,l.useState)(!1),k=_[0],Z=_[1];(0,l.useEffect)((function(){Z(!0)}),[]);var P=(0,o.bc)(b)||E,y=(0,o.pJ)();if(l.Children.toArray(a).some((function(e){return(0,l.isValidElement)(e)})))return l.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(k),theme:y,code:"",language:"text"}),(function(e){var t=e.className,n=e.style;return l.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,g,"thin-scrollbar",c,h,o.kM.common.codeBlock),style:n},l.createElement("code",{className:p},a))}));var L=Array.isArray(a)?a.join(""):a,C=null!=(t=null!=f?f:(0,o.Vo)(h))?t:N.defaultLanguage,I=(0,o.nZ)(L,b,C),T=I.highlightLines,x=I.code;return l.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(k),theme:y,code:x,language:null!=C?C:"text"}),(function(e){var t,a=e.className,i=e.style,g=e.tokens,v=e.getLineProps,b=e.getTokenProps;return l.createElement("div",{className:(0,r.Z)(c,h,(t={},t["language-"+C]=C&&!h.includes("language-"+C),t),o.kM.common.codeBlock)},P&&l.createElement("div",{style:i,className:u},P),l.createElement("div",{className:m,style:i},l.createElement("pre",{tabIndex:0,className:(0,r.Z)(a,d,"thin-scrollbar")},l.createElement("code",{className:p},g.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var a=v({line:e,key:t});return T.includes(t)&&(a.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,n.Z)({key:t},a),e.map((function(e,t){return l.createElement("span",(0,n.Z)({key:t},b({token:e,key:t})))})),l.createElement("br",null))})))),l.createElement(s.Z,{code:x})))}))}}}]);