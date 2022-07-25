"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[301],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),l=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return n?o.createElement(f,s(s({ref:e},p),{},{components:n})):o.createElement(f,s({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,s=new Array(c);s[0]=m;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:r,s[1]=a;for(var l=2;l<c;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52437:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(87462),r=n(63366),c=(n(67294),n(3905)),s=["components"],a={id:"contract",title:"Contract"},i=void 0,l={unversionedId:"basic-concepts/contract",id:"basic-concepts/contract",title:"Contract",description:"contract means a public convention for changes to a stillness-component that will provide various information about the particular stillness-component. It responds to stillness state changes by updating the props of the wrapper component.",source:"@site/docs/basic-concepts/contract.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/contract",permalink:"/react-stillness-component/docs/basic-concepts/contract",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/basic-concepts/contract.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1658743438,formattedLastUpdatedAt:"7/25/2022",frontMatter:{id:"contract",title:"Contract"},sidebar:"docs",previous:{title:"Items and Types",permalink:"/react-stillness-component/docs/basic-concepts/items-types"},next:{title:"max",permalink:"/react-stillness-component/docs/basic-concepts/max"}},p={},u=[{value:"collect",id:"collect",level:2}],m={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,c.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("inlineCode",{parentName:"p"},"contract")," means a public convention for changes to a stillness-component that will provide various information about the particular stillness-component. It responds to stillness state changes by updating the ",(0,c.kt)("inlineCode",{parentName:"p"},"props")," of the wrapper component.")),(0,c.kt)("h2",{id:"collect"},"collect"),(0,c.kt)("p",null,"For each component that needs to listen to the stillness state, a pure function can be customized and passed to ",(0,c.kt)("inlineCode",{parentName:"p"},"connectStillness")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"useStillness"),". The stillness-component will collect and call this function when the stillness state is modified and merge the return value into ",(0,c.kt)("inlineCode",{parentName:"p"},"props"),"."),(0,c.kt)("p",null,"The example is as follows:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Hoc"',title:'"Hoc"'},"const spec = {\n  // highlight-start\n  collect: (props,contract) => ({\n    isStillness: contract.isStillness()\uff0c\n    stillnessId: contract.getStillnessId()\uff0c\n  });\n  // highlight-end\n};\n\nconnectStillness(spec);\n")),(0,c.kt)("p",null,"or"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Hooks"',title:'"Hooks"'},"const spec = (props) => {\n  return {\n    // highlight-start\n    collect: (contract) => ({\n      isStillness: contract.isStillness()\uff0c\n      stillnessId: contract.getStillnessId()\uff0c\n    })\n    // highlight-end\n  }\n}\n\nfunction Count(props) {\n  const collected = useStillness(spec(props));\n  ...\n}\n")))}d.isMDXComponent=!0}}]);