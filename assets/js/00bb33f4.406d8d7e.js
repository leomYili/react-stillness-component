"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[238],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},196:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={sidebar_position:0,title:"v5"},l=void 0,c={unversionedId:"examples/react-router/v5",id:"examples/react-router/v5",title:"v5",description:"React-router Route",source:"@site/docs/examples/react-router/v5.md",sourceDirName:"examples/react-router",slug:"/examples/react-router/v5",permalink:"/react-stillness-component/docs/examples/react-router/v5",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/examples/react-router/v5.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1651820678,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"v5"},sidebar:"examples",previous:{title:"simple",permalink:"/react-stillness-component/docs/examples/simple/intro"},next:{title:"v6",permalink:"/react-stillness-component/docs/examples/react-router/v6"}},p={},u=[{value:"React-router Route",id:"react-router-route",level:2},{value:"React-router Switch",id:"react-router-switch",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"react-router-route"},"React-router Route"),(0,o.kt)("p",null,"This example shows the caching of ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dom")," respectively"),(0,o.kt)("p",null,"where the counter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," tab is not updated due to route changes because it is quiesced.\nAnd the list in the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," tab will always remember the last position after scrolling, because it is also quiesced."),(0,o.kt)("p",null,"Of course, after clicking the ",(0,o.kt)("strong",{parentName:"p"},"clear")," button, the cache state of the counter and the list will be cleared."),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/01-example-react-routerv5-sz3xxo?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"01-example-react-routerV5",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("h2",{id:"react-router-switch"},"React-router Switch"),(0,o.kt)("p",null,"This example uses the relevant features of ",(0,o.kt)("inlineCode",{parentName:"p"},"Switch")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Title: StillnessSwitch")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StillnessSwitch")," here is based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"withRouter")," wrapper component, as stated in the brief, ",(0,o.kt)("inlineCode",{parentName:"p"},"react-stillness-component")," is the base library, which can be combined and wrapped on it again"),(0,o.kt)("p",{parentName:"div"},"Because the official ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," unloads the other routes by default, the component encapsulated here retains the match function of ",(0,o.kt)("inlineCode",{parentName:"p"},"switch"),", but also does caching for the routes, so that each route is stillness by default, and if you want to control it yourself, you can also support it through various native capabilities, such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),", compared to the original code, just do not uninstall other routes only"),(0,o.kt)("p",{parentName:"div"},"If you have a better idea, welcome to discuss!"))),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/03-example-react-routerv5-switch-qyfdcx?fontsize=14&hidenavigation=1&module=%2Fsrc%2FStillnessSwitch%2Findex.js&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},s:!0,title:"03-example-react-routerV5-switch",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);