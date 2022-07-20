"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[759],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:2,id:"contract-state",title:"Contract State"},c=void 0,s={unversionedId:"api/contract-state",id:"api/contract-state",title:"Contract State",description:"Contract State \u662f\u8fd4\u56de\u7ed9 collect\u51fd\u6570\u7684\u53c2\u6570\uff0c\u5b83\u5c06\u63d0\u4f9b\u7279\u5b9a\u9759\u6b62\u7ec4\u4ef6(\u4e00\u822c\u662f\u6700\u8fd1\u5c42\u7ea7\u7684``)\u7684\u5404\u79cd\u4fe1\u606f.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/contract-state.md",sourceDirName:"api",slug:"/api/contract-state",permalink:"/react-stillness-component/zh-CN/docs/api/contract-state",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/api/contract-state.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1658307413,formattedLastUpdatedAt:"2022/7/20",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"contract-state",title:"Contract State"},sidebar:"docs",previous:{title:"useStillness",permalink:"/react-stillness-component/zh-CN/docs/api/Hooks/useStillness"},next:{title:"global",permalink:"/react-stillness-component/zh-CN/docs/api/global"}},p={},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"Contract State")," \u662f\u8fd4\u56de\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"collect"),"\u51fd\u6570\u7684\u53c2\u6570\uff0c\u5b83\u5c06\u63d0\u4f9b\u7279\u5b9a\u9759\u6b62\u7ec4\u4ef6(\u4e00\u822c\u662f\u6700\u8fd1\u5c42\u7ea7\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"<Offscreen>"),")\u7684\u5404\u79cd\u4fe1\u606f.")),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStillnessId()"),": \u8fd4\u56de ",(0,i.kt)("strong",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u662f\u5f53\u524d\u9759\u6b62\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStillnessItem()"),": \u8fd4\u56de ",(0,i.kt)("strong",{parentName:"li"},"object")," \u7c7b\u578b\uff0c\u662f\u5f53\u524d\u9759\u6b62\u7ec4\u4ef6\u7684\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStillnessType()"),": \u8fd4\u56de ",(0,i.kt)("strong",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u662f\u5f53\u524d\u9759\u6b62\u7ec4\u4ef6\u7684\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isStillness()"),": \u8fd4\u56de ",(0,i.kt)("strong",{parentName:"li"},"boolean"),"\u7c7b\u578b, \u68c0\u67e5\u5f53\u524d\u7ec4\u4ef6\u7684\u9759\u6b62\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unset(id?: string,type?: string)"),": \u4e0d\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u6307\u5b9a\u8981\u5378\u8f7d\u7684\u9759\u6b62\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u548c\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u770b\u505a\u5237\u65b0\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clear()"),": \u4e0d\u8fd4\u56de\u503c\uff0c\u6e05\u9664\u6240\u6709\u9759\u6b62\u7ec4\u4ef6\u72b6\u6001,\u4e5f\u53ef\u4ee5\u770b\u505a\u5237\u65b0\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resetMax(max: number)"),": \u91cd\u7f6e\u5168\u5c40\u9759\u6b62\u7ec4\u4ef6\u6700\u5927\u503c")))}d.isMDXComponent=!0}}]);