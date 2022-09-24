"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{54067:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(5979),r={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},s=a(86010),i=a(39960),c=a(44996);function o(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(i.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function d(e){var t=e.children,a=e.active,l=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function m(){var e=(0,c.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.Z,{className:(0,s.Z)("breadcrumbs__link",r.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,l.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,s.Z)(l.kM.docs.docBreadcrumbs,r.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(m,null),e.map((function(t,a){return n.createElement(d,{key:a,active:a===e.length-1,index:a},n.createElement(o,{href:a<e.length-1?t.href:void 0},t.label))})))):null}},69153:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var n=a(67294),l=a(86010),r=a(61101),s=a(94474),i=a(27597),c=a(95999),o=a(5979);function d(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:o.kM.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(m,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(86753),b=a(20062),p="lastUpdated_foO9";function E(e){return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(b.Z,e)))}function g(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(v.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",p)},(a||r)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function h(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,d=c.length>0,m=!!(a||r||i);return d||m?n.createElement("footer",{className:(0,l.Z)(o.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(E,{tags:c}),m&&n.createElement(g,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var f=a(51575),N="tocCollapsible_jdIR",Z="tocCollapsibleButton_Fzxq",k="tocCollapsibleContent_MpvI",L="tocCollapsibleExpanded_laf4",_=a(25002);function y(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,o.uR)({initialState:!0}),d=i.collapsed,m=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(N,!d&&L,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",Z),onClick:m},n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(o.zF,{lazy:!0,className:k,collapsed:d},n.createElement(_.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var C=a(39649),U="docItemContainer_vinB",T="docItemCol_DM6M",M="tocMobile_TmEX",A=a(54067),w=a(64269);function x(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=a.assets,i=r.keywords,c=l.description,d=l.title,m=null!=(t=s.image)?t:r.image;return n.createElement(o.d,{title:d,description:c,keywords:i,image:m})}function B(e){var t=e.content,a=t.metadata,c=t.frontMatter,d=c.hide_title,m=c.hide_table_of_contents,u=c.toc_min_heading_level,v=c.toc_max_heading_level,b=a.title,p=!d&&void 0===t.contentTitle,E=(0,o.iP)(),g=!m&&t.toc&&t.toc.length>0,N=g&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!m&&T)},n.createElement(s.Z,null),n.createElement("div",{className:U},n.createElement("article",null,n.createElement(A.Z,null),n.createElement(i.Z,null),g&&n.createElement(y,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:(0,l.Z)(o.kM.docs.docTocMobile,M)}),n.createElement("div",{className:(0,l.Z)(o.kM.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(C.Z,{as:"h1"},b)),n.createElement(w.Z,null,n.createElement(t,null))),n.createElement(h,e)),n.createElement(r.Z,{previous:a.previous,next:a.next}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(f.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:o.kM.docs.docTocDesktop})))}function H(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(o.FG,{className:t},n.createElement(x,e),n.createElement(B,e))}},61101:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(87462),l=a(67294),r=a(95999),s=a(71750);function i(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s.Z,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(s.Z,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},27597:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(95999),r=a(5979),s=a(86010);function i(e){var t=e.className,a=(0,r.E6)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,r.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},94474:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(67294),l=a(52263),r=a(39960),s=a(95999),i=a(65551),c=a(5979),o=a(86010);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,r=e.versionMetadata,s=(0,l.Z)().siteConfig.title,d=(0,i.gA)({failfast:!0}).pluginId,v=(0,c.J)(d).savePreferredVersionName,b=(0,i.Jo)(d),p=b.latestDocSuggestion,E=b.latestVersionSuggestion,g=null!=p?p:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,o.Z)(a,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:E.label,to:g.path,onClick:function(){return v(E.name)}})))}function b(e){var t=e.className,a=(0,c.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},51575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),l=a(63366),r=a(67294),s=a(86010),i=a(25002),c="tableOfContents_cNA8",o=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,s.Z)(c,"thin-scrollbar",t)},r.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(87462),l=a(63366),r=a(67294),s=a(5979),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,p=e.maxHeadingLevel,E=(0,l.Z)(e,i),g=(0,s.LU)(),h=null!=b?b:g.tableOfContents.minHeadingLevel,f=null!=p?p:g.tableOfContents.maxHeadingLevel,N=(0,s.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:f}),Z=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:h,maxHeadingLevel:f}}),[m,v,h,f]);return(0,s.Si)(Z),r.createElement(c,(0,n.Z)({toc:N,className:o,linkClassName:m},E))}},20819:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),l=a(67294),r=a(86010),s=a(23746),i=a(5979),c=a(97413),o="codeBlockContainer_X7hc",d="codeBlockContent_vqWU",m="codeBlockTitle_B2tn",u="codeBlock_wPnj",v="codeBlockStandalone_LFTq",b="codeBlockLines_fQUY";function p(e){var t,a=e.children,p=e.className,E=void 0===p?"":p,g=e.metastring,h=e.title,f=e.language,N=(0,i.LU)().prism,Z=(0,l.useState)(!1),k=Z[0],L=Z[1];(0,l.useEffect)((function(){L(!0)}),[]);var _=(0,i.bc)(g)||h,y=(0,i.pJ)();if(l.Children.toArray(a).some((function(e){return(0,l.isValidElement)(e)})))return l.createElement(s.ZP,(0,n.Z)({},s.lG,{key:String(k),theme:y,code:"",language:"text"}),(function(e){var t=e.className,n=e.style;return l.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,v,"thin-scrollbar",o,E,i.kM.common.codeBlock),style:n},l.createElement("code",{className:b},a))}));var C=Array.isArray(a)?a.join(""):a,U=null!=(t=null!=f?f:(0,i.Vo)(E))?t:N.defaultLanguage,T=(0,i.nZ)(C,g,U),M=T.highlightLines,A=T.code;return l.createElement(s.ZP,(0,n.Z)({},s.lG,{key:String(k),theme:y,code:A,language:null!=U?U:"text"}),(function(e){var t,a=e.className,s=e.style,v=e.tokens,p=e.getLineProps,g=e.getTokenProps;return l.createElement("div",{className:(0,r.Z)(o,E,(t={},t["language-"+U]=U&&!E.includes("language-"+U),t),i.kM.common.codeBlock)},_&&l.createElement("div",{style:s,className:m},_),l.createElement("div",{className:d,style:s},l.createElement("pre",{tabIndex:0,className:(0,r.Z)(a,u,"thin-scrollbar")},l.createElement("code",{className:b},v.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var a=p({line:e,key:t});return M.includes(t)&&(a.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,n.Z)({key:t},a),e.map((function(e,t){return l.createElement("span",(0,n.Z)({key:t},g({token:e,key:t})))})),l.createElement("br",null))})))),l.createElement(c.Z,{code:A})))}))}}}]);