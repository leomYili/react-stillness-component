"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={sidebar_position:3,title:"nextjs"},p=void 0,l={unversionedId:"examples/nextjs/index",id:"examples/nextjs/index",title:"nextjs",description:"nextjs is relatively special, the file routing system can not be modified externally, therefore, customize _app.js, by adding StillnessSwitch component, simply turn the routing components under it into static components.",source:"@site/docs/examples/nextjs/index.md",sourceDirName:"examples/nextjs",slug:"/examples/nextjs/",permalink:"/react-stillness-component/docs/examples/nextjs/",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/examples/nextjs/index.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1658743438,formattedLastUpdatedAt:"7/25/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"nextjs"},sidebar:"examples",previous:{title:"v3",permalink:"/react-stillness-component/docs/examples/umi/v3"}},c={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"nextjs is relatively special, the file routing system can not be modified externally, therefore, customize ",(0,s.kt)("inlineCode",{parentName:"p"},"_app.js"),", by adding ",(0,s.kt)("inlineCode",{parentName:"p"},"StillnessSwitch component"),", simply turn the routing components under it into static components."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="StillnessSwitch"',title:'"StillnessSwitch"'},"import React, { useState, useEffect } from 'react';\nimport { useRouter } from 'next/router';\nimport { Offscreen } from 'react-stillness-component';\n\nfunction matchPath(pathname, routes) {\n  const result = routes.find(({ path }) => path === pathname) || null;\n\n  return result;\n}\n\nconst StillnessSwitch = (props) => {\n  const { Component, pageProps } = props;\n  const router = useRouter();\n  const [stillnessRoutes, setStillnessRoutes] = useState([]);\n  const [route, setRoute] = useState([]);\n\n  useEffect(() => {\n    if (pageProps.stillness) {\n      !matchPath(router.pathname, stillnessRoutes) &&\n        setStillnessRoutes([\n          ...stillnessRoutes,\n          { Page: Component, _props: pageProps, path: router.pathname },\n        ]);\n      setRoute([]);\n    } else {\n      setRoute([\n        {\n          Page: Component,\n          _props: pageProps,\n          path: router.pathname,\n        },\n      ]);\n    }\n  }, [Component, router.pathname]);\n\n  return (\n    <>\n      {stillnessRoutes.concat(route).map(({ Page, _props, path }) => {\n        if (_props.stillness) {\n          return (\n            <Offscreen\n              key={path}\n              type={path}\n              visible={path === router.pathname}\n            >\n              <Page {..._props} />\n            </Offscreen>\n          );\n        }\n\n        return <Page {..._props} />;\n      })}\n    </>\n  );\n};\n\nexport default StillnessSwitch;\n")),(0,s.kt)("iframe",{src:"https://codesandbox.io/embed/06-example-nextjs-kwcu20?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"06-example-nextjs",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}f.isMDXComponent=!0}}]);