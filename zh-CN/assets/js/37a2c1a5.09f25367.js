"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return b}});var r=n(87462),a=n(63366),o=n(67294),l=n(3905),s=n(72389),i=n(5979),c=n(86010),u="tabItem_LplD";function p(e){var t,n,a,l=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,o.useState)(g),O=w[0],C=w[1],T=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=N[d];null!=x&&x!==O&&h.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==O&&(S(t),C(r),null!=d&&y(d,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:E,onClick:E},a,{className:(0,c.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,s.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}function d(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}var f=["components"],v={id:"get-started",title:"\u5feb\u901f\u4e0a\u624b"},h=void 0,k={unversionedId:"get-started",id:"get-started",title:"\u5feb\u901f\u4e0a\u624b",description:"React-stillness-component \u662f\u4e00\u4e2a npm packages.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/react-stillness-component/zh-CN/docs/get-started",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/get-started.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1648738578,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"get-started",title:"\u5feb\u901f\u4e0a\u624b"},sidebar:"docs",previous:{title:"\u7b80\u4ecb",permalink:"/react-stillness-component/zh-CN/docs/intro"},next:{title:"Basic Concepts",permalink:"/react-stillness-component/zh-CN/docs/category/basic-concepts"}},g={},b=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"TypeScript\u652f\u6301",id:"typescript-support",level:2}],N={toc:b};function y(e){var t=e.components,o=(0,a.Z)(e,f);return(0,l.kt)("wrapper",(0,r.Z)({},N,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"React-stillness-component \u662f\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-stillness-component"},"npm packages"),".")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9605\u8bfb ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/react-stillness-component/zh-CN/docs/intro"},"\u7b80\u4ecb"))," \u6765\u7b80\u5355\u4e86\u89e3\u5b83\u7684\u8fd0\u4f5c\u539f\u7406!"))),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 yarn \u7ba1\u7406 npm \u4f9d\u8d56\uff0c\u5e76\u4f7f\u7528\u56fd\u5185\u6e90\u52a0\u901f"),(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(d,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-stillness-component\n"))),(0,l.kt)(d,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-stillness-component\n"))),(0,l.kt)(d,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react-stillness-component\n")))),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"\u7ec4\u4ef6\u4e2d\u5927\u91cf\u4f7f\u7528\u5230\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Hooks"),"\uff0c\u6240\u4ee5\u9700\u8981\u5f15\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"React 16.8+")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u4f60\u7684\u9879\u76ee\u5f15\u5165 ",(0,l.kt)("a",{parentName:"p",href:"api/Components/stillnessProvider"},(0,l.kt)("inlineCode",{parentName:"a"},"<StillnessProvider>"))," \u5e76\u5c3d\u91cf\u653e\u7f6e\u5728\u9876\u5c42"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='index.js'",title:"'index.js'"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { StillnessProvider } from 'react-stillness-component';\nimport App from './App';\n\nReactDOM.render(\n  <StillnessProvider>\n    <App />\n  </StillnessProvider>\uff0c\ndocument.getElementById('root') );\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"api/Components/Offscreen"},(0,l.kt)("inlineCode",{parentName:"a"},"<Offscreen>"))," \u5305\u88f9\u4f60\u9700\u8981\u9759\u6b62\u7684\u7ec4\u4ef6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nfunction App() {\n  const [show, setShow] = useState(true)\n\n  return (\n    <div>\n      <button onClick={() => setShow(show => !show)}>Toggle</button>\n      // highlight-start\n      <Offscreen visible={show}>\n        <Count />\n      </Offscreen>\n      // highlight-end\n    </div>\n  );\n}\n...\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9759\u6b62\u7ec4\u4ef6\u63a7\u5236\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"api/Hooks/useStillness"},(0,l.kt)("inlineCode",{parentName:"a"},"useStillness"))," \u6216\u8005 ",(0,l.kt)("a",{parentName:"p",href:"api/Decorators/connectStillness"},(0,l.kt)("inlineCode",{parentName:"a"},"connectStillness"))," \u53bb\u76d1\u542c\u76f8\u5173\u7684\u9759\u6b62\u884c\u4e3a\uff0c\u4ee5\u53ca\u624b\u52a8\u63a7\u5236\u9759\u6b62\u72b6\u6001"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Offscreen,useStillness } from 'react-stillness-component';\n\nfunction Count() {\n  const [count, setCount] = useState(0);\n  const collected = useStillness({\n    mounted: (contract) => {\n      return 'mounted';\n    },\n    unmounted: (contract) => {\n      return 'unmounted';\n    },\n    collect: (contract) => {\n      return {\n        isStillness: contract.isStillness(),\n        stillnessId: contract.getStillnessId(),\n        unset: contract.unset, // function\n        clear: contract.clear, // function\n      };\n    },\n  });\n\n  return (\n    <div className=\"count\">\n      <p>{collected.isStillness}</p>\n      <p>class count: {count}</p>\n      <button\n        onClick={() => {\n          setCount((count) => count + 1);\n        }}\n      >\n        Add\n      </button>\n    </div>\n  );\n}\n")))),(0,l.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/docs/category/api"},"API"),"\u6587\u6863"),(0,l.kt)("h2",{id:"typescript-support"},"TypeScript\u652f\u6301"),(0,l.kt)("p",null,"\u672c\u9879\u76ee\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"TypeScript"),"\u8bed\u8a00\u8fdb\u884c\u5f00\u53d1\uff0c\u5e76\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u5b9a\u4e49\uff0c\u53ef\u4ee5\u9884\u89c8\u7ec4\u4ef6\u5c5e\u6027\u8f93\u5165\u5efa\u8bae\u548c\u5b9a\u4e49\u68c0\u67e5\u7684\u529f\u80fd"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"code",src:n(49433).Z,width:"1568",height:"674"})))}y.isMDXComponent=!0},49433:function(e,t,n){t.Z=n.p+"assets/images/code1-d365a41445ec8ef0de1bfa80ff4f3ce8.png"}}]);