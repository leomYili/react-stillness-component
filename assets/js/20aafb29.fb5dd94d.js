"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[666],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"max",title:"max"},s=void 0,l={unversionedId:"basic-concepts/max",id:"basic-concepts/max",title:"max",description:"For special scenarios, sometimes you need to control the number of nodes in the cache, use max to achieve the effect of automatically refreshing the static components",source:"@site/docs/basic-concepts/max.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/max",permalink:"/react-stillness-component/docs/basic-concepts/max",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/basic-concepts/max.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1658743438,formattedLastUpdatedAt:"7/25/2022",frontMatter:{id:"max",title:"max"},sidebar:"docs",previous:{title:"Contract",permalink:"/react-stillness-component/docs/basic-concepts/contract"},next:{title:"API",permalink:"/react-stillness-component/docs/category/api"}},p={},u=[{value:"Example",id:"example",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For special scenarios, sometimes you need to control the number of nodes in the cache, use ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," to achieve the effect of automatically refreshing the static components")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"max' uses the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)"},"lru")," algorithm to automatically clear the oldest and least used nodes in the history when the static nodes reach the limit. thus improving performance"),(0,a.kt)("p",null,"Note that only the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Offscreen>")," node at the first level of max is counted as a node, and all its children follow the parent node, so only the first level node in the system will participate in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lru")," memory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="max"',title:'"max"'},"\nconst App = () => {\n  const [visible,setVisible] = useState(true);\n\n  return (\n    <StillnessProvider options={max:2}>\n      <Offscreen visible={visible}><A></Offscreen>\n      <Offscreen visible={visible}><B></Offscreen>\n      <Offscreen visible={!visible}><C></Offscreen>\n    </StillnessProvider>\n  );\n}\n")))}f.isMDXComponent=!0}}]);