"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{20819:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(87462),l=t(67294),c=t(86010),r=t(23746),o=t(5979),s=t(97413),i="codeBlockContainer_X7hc",u="codeBlockContent_vqWU",m="codeBlockTitle_B2tn",d="codeBlock_wPnj",k="codeBlockStandalone_LFTq",g="codeBlockLines_fQUY";function h(e){var n,t=e.children,h=e.className,f=void 0===h?"":h,E=e.metastring,y=e.title,p=e.language,v=(0,o.LU)().prism,Z=(0,l.useState)(!1),N=Z[0],b=Z[1];(0,l.useEffect)((function(){b(!0)}),[]);var B=(0,o.bc)(E)||y,L=(0,o.pJ)();if(l.Children.toArray(t).some((function(e){return(0,l.isValidElement)(e)})))return l.createElement(r.ZP,(0,a.Z)({},r.lG,{key:String(N),theme:L,code:"",language:"text"}),(function(e){var n=e.className,a=e.style;return l.createElement("pre",{tabIndex:0,className:(0,c.Z)(n,k,"thin-scrollbar",i,f,o.kM.common.codeBlock),style:a},l.createElement("code",{className:g},t))}));var _=Array.isArray(t)?t.join(""):t,w=null!=(n=null!=p?p:(0,o.Vo)(f))?n:v.defaultLanguage,C=(0,o.nZ)(_,E,w),P=C.highlightLines,x=C.code;return l.createElement(r.ZP,(0,a.Z)({},r.lG,{key:String(N),theme:L,code:x,language:null!=w?w:"text"}),(function(e){var n,t=e.className,r=e.style,k=e.tokens,h=e.getLineProps,E=e.getTokenProps;return l.createElement("div",{className:(0,c.Z)(i,f,(n={},n["language-"+w]=w&&!f.includes("language-"+w),n),o.kM.common.codeBlock)},B&&l.createElement("div",{style:r,className:m},B),l.createElement("div",{className:u,style:r},l.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,d,"thin-scrollbar")},l.createElement("code",{className:g},k.map((function(e,n){1===e.length&&"\n"===e[0].content&&(e[0].content="");var t=h({line:e,key:n});return P.includes(n)&&(t.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,a.Z)({key:n},t),e.map((function(e,n){return l.createElement("span",(0,a.Z)({key:n},E({token:e,key:n})))})),l.createElement("br",null))})))),l.createElement(s.Z,{code:x})))}))}}}]);