"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[294],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:1,id:"useStillness",title:"useStillness"},s=void 0,c={unversionedId:"api/Hooks/useStillness",id:"api/Hooks/useStillness",title:"useStillness",description:"useStillness connects the React component to the stillness-component control center, which provides the connected component with data from the control center and the functions it can use to manipulate the still, and you can declare the properties and methods you want",source:"@site/docs/api/Hooks/useStillness.md",sourceDirName:"api/Hooks",slug:"/api/Hooks/useStillness",permalink:"/react-stillness-component/docs/api/Hooks/useStillness",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/api/Hooks/useStillness.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1651820678,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"useStillness",title:"useStillness"},sidebar:"docs",previous:{title:"useStillnessManager",permalink:"/react-stillness-component/docs/api/Hooks/useStillnessManager"},next:{title:"Contract State",permalink:"/react-stillness-component/docs/api/contract-state"}},p={},u=[{value:"usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"useStillness")," connects the React component to the stillness-component control center, which provides the connected component with data from the control center and the functions it can use to manipulate the still, and you can declare the properties and methods you want")),(0,a.kt)("h2",{id:"usage"},"usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useStillness } from 'react-stillness-component';\n\nfunction Count(props) {\n  const [count, setCount] = useState(0);\n  const collected = useStillness({\n    mounted: (contract) => {\n      return 'mounted';\n    },\n    unmounted: (contract) => {\n      return 'unmounted';\n    },\n    collect: (contract) => {\n      return {\n        isStillness: contract.isStillness(),\n        stillnessId: contract.getStillnessId(),\n        item: contract.getStillnessItem(),\n      };\n    },\n  });\n\n  useEffect(() => {\n    console.log(collected);\n  }, [collected]);\n\n  return <div>...</div>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mounted"),": optional, ",(0,a.kt)("strong",{parentName:"li"},"function"),", used to describe the initialization behavior of a stationary component with the following parameters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),": optional, ",(0,a.kt)("strong",{parentName:"li"},"object"),", the props of the component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contract"),": Required, ",(0,a.kt)("strong",{parentName:"li"},"object"),", the contract of the component, see ",(0,a.kt)("a",{parentName:"li",href:"/react-stillness-component/docs/api/contract-state"},"Contract State")," for more information"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unmounted"),": optional, ",(0,a.kt)("strong",{parentName:"li"},"function"),", used to describe the unmounting behavior of a stillness-component with the following arguments",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),": optional, ",(0,a.kt)("strong",{parentName:"li"},"object"),", the props of the component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contract"),": Required, ",(0,a.kt)("strong",{parentName:"li"},"object"),", the contract of the component, see ",(0,a.kt)("a",{parentName:"li",href:"/react-stillness-component/docs/api/contract-state"},"Contract State")," for more information"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"collect"),": optional, ",(0,a.kt)("strong",{parentName:"li"},"function"),", used to describe the data collection behavior of a stillness-component with the following parameters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),": optional, ",(0,a.kt)("strong",{parentName:"li"},"object"),", the props of the component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contract"),": optional, ",(0,a.kt)("strong",{parentName:"li"},"object"),", the contract of the component, see ",(0,a.kt)("a",{parentName:"li",href:"/react-stillness-component/docs/api/contract-state"},"Contract State")," for more information")))))}d.isMDXComponent=!0}}]);