"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[236],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"items-types",title:"Items and Types"},p=void 0,c={unversionedId:"basic-concepts/items-types",id:"basic-concepts/items-types",title:"Items and Types",description:"\u5f53\u76d1\u542c\u9759\u6b62\u7ec4\u4ef6\u5404\u79cd\u72b6\u6001\u65f6\uff0c\u901a\u5e38\u79bb\u4e0d\u5f00\u5bf9\u4e8e Items \u4e0e Types \u7684\u4f7f\u7528.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/items-types.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/items-types",permalink:"/react-stillness-component/zh-CN/docs/basic-concepts/items-types",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/basic-concepts/items-types.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1657863838,formattedLastUpdatedAt:"2022/7/15",frontMatter:{id:"items-types",title:"Items and Types"},sidebar:"docs",previous:{title:"Basic Concepts",permalink:"/react-stillness-component/zh-CN/docs/category/basic-concepts"},next:{title:"Contract",permalink:"/react-stillness-component/zh-CN/docs/basic-concepts/contract"}},l={},m=[{value:"Items",id:"items",level:2},{value:"Types",id:"types",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f53\u76d1\u542c\u9759\u6b62\u7ec4\u4ef6\u5404\u79cd\u72b6\u6001\u65f6\uff0c\u901a\u5e38\u79bb\u4e0d\u5f00\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Types")," \u7684\u4f7f\u7528.")),(0,i.kt)("h2",{id:"items"},"Items"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Items")," \u662f\u63cf\u8ff0\u88ab\u9759\u6b62\u5185\u5bb9\u7684 ",(0,i.kt)("strong",{parentName:"p"},"JavaScript \u5bf9\u8c61"),".\u5f53\u5f00\u59cb\u9759\u6b62\u7ec4\u4ef6\u65f6\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},'{type:"mounted"\uff0cdata:{...}}')," \u7684\u5bf9\u8c61.\u8fd9\u4e2a\u5bf9\u8c61\u4e4b\u540e\u4f1a\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u4ee5\u4fbf\u4f7f\u7528."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nconst spec = {\n  mounted: (props\uff0c contract) => {\n    return {\n      type: 'mounted'\uff0c\n      data: {\n        ...\n      }\n    };\n  }\uff0c\n  unmounted: (props\uff0c contract) => {\n    return {\n      type: 'unmounted'\uff0c\n      data: {\n        ...\n      }\n    };\n  }\uff0c\n  collect: (props, contract) => {\n    return {\n      isStillness: contract.isStillness(),\n      stillnessId: contract.getStillnessId(),\n    };\n  },\n};\n\nconnectStillness(spec) or useStillness(spec);\n...\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Items")," \u5e76\u4e0d\u662f\u5fc5\u987b\u8fd4\u56de\u7684\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9"))),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Type")," \u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\u7684\u503c\uff0c\u7528\u4e8e\u6807\u8bc6\u5e94\u7528\u4e2d\u540c\u4e00\u7c7b\u522b\u7684\u9759\u6b62\u7ec4\u4ef6.\u5728\u5e94\u7528\u4e2d\u901a\u5e38\u8868\u73b0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},'type="card"')," \uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," \u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u5f53\u4f60\u6709\u5916\u90e8\u63a7\u5236\u9759\u6b62\u7ec4\u4ef6\u9700\u6c42\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u503c."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Offscreen visible={visible} type="card">\n  <Count></Count>\n</Offscreen>\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9759\u6b62\u7ec4\u4ef6\u9ed8\u8ba4\u7236\u7ec4\u4ef6\u72b6\u6001\u5f71\u54cd\u5b50\u7ec4\u4ef6\uff0c\u5f53\u7236\u5b50\u7ec4\u4ef6\u6240\u4f9d\u8d56\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," \u4e00\u81f4\u65f6\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7ed9\u7236\u5b50\u7ec4\u4ef6\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u503c."))))}u.isMDXComponent=!0}}]);