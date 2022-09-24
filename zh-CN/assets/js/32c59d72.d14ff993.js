"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1255],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60426:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],s={title:"\u7528TDD\u7684\u601d\u60f3\u505a\u7ec4\u4ef6\u6d4b\u8bd5",description:"\u8fd9\u662f\u6211\u5173\u4e8e\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u7b2c\u4e00\u7bc7\u535a\u6587\u3002",date:"2022-09-24T13:20",slug:"tdd-test",authors:"leomYili",tags:["TDD","test"],hide_table_of_contents:!1},i=void 0,p={permalink:"/react-stillness-component/zh-CN/blog/tdd-test",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/blog/\u7528TDD\u7684\u601d\u60f3\u505a\u7ec4\u4ef6\u6d4b\u8bd5.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/\u7528TDD\u7684\u601d\u60f3\u505a\u7ec4\u4ef6\u6d4b\u8bd5.md",title:"\u7528TDD\u7684\u601d\u60f3\u505a\u7ec4\u4ef6\u6d4b\u8bd5",description:"\u8fd9\u662f\u6211\u5173\u4e8e\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u7b2c\u4e00\u7bc7\u535a\u6587\u3002",date:"2022-09-24T13:20:00.000Z",formattedDate:"2022\u5e749\u670824\u65e5",tags:[{label:"TDD",permalink:"/react-stillness-component/zh-CN/blog/tags/tdd"},{label:"test",permalink:"/react-stillness-component/zh-CN/blog/tags/test"}],readingTime:8.996666666666666,truncated:!1,authors:[{name:"leomYili",title:"creator",url:"https://github.com/leomYili",imageURL:"https://avatars.githubusercontent.com/u/17920032?v=4",key:"leomYili"}],frontMatter:{title:"\u7528TDD\u7684\u601d\u60f3\u505a\u7ec4\u4ef6\u6d4b\u8bd5",description:"\u8fd9\u662f\u6211\u5173\u4e8e\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u7b2c\u4e00\u7bc7\u535a\u6587\u3002",date:"2022-09-24T13:20",slug:"tdd-test",authors:"leomYili",tags:["TDD","test"],hide_table_of_contents:!1},nextItem:{title:"react\u4e2d\u5982\u4f55\u5b9e\u73b0keep-alive",permalink:"/react-stillness-component/zh-CN/blog/Realization react-stillness-component"}},c={authorsImageUrls:[void 0]},u=[{value:"\u4e00.\u524d\u8a00-\u81ea\u52a8\u5316\u6d4b\u8bd5\u76f8\u5173",id:"\u4e00\u524d\u8a00-\u81ea\u52a8\u5316\u6d4b\u8bd5\u76f8\u5173",level:2},{value:"\u4e8c.\u6211\u6240\u8ba4\u4e3a\u7684 tdd \u5b9e\u9645\u843d\u5730\u6d41\u7a0b",id:"\u4e8c\u6211\u6240\u8ba4\u4e3a\u7684-tdd-\u5b9e\u9645\u843d\u5730\u6d41\u7a0b",level:2},{value:"\u4e09.\u5b9e\u9645\u6848\u4f8b",id:"\u4e09\u5b9e\u9645\u6848\u4f8b",level:2},{value:"provider",id:"provider",level:3},{value:"class Component",id:"class-component",level:3},{value:"HOC",id:"hoc",level:3},{value:"hooks",id:"hooks",level:3},{value:"\u56db.\u95ee\u9898\u6c47\u603b",id:"\u56db\u95ee\u9898\u6c47\u603b",level:2},{value:"\u4e94.\u603b\u7ed3",id:"\u4e94\u603b\u7ed3",level:2}],m={toc:u};function d(e){var n=e.components,s=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Test-Driven Development(\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1,\u4ee5\u4e0b\u7b80\u8ff0",(0,l.kt)("strong",{parentName:"p"},"TDD"),")\u662f\u4e00\u79cd\u8bbe\u8ba1\u65b9\u6cd5\u8bba, \u539f\u7406\u662f\u5728\u5f00\u53d1\u529f\u80fd\u4ee3\u7801\u4e4b\u524d, \u5148\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u4ee3\u7801, \u901a\u8fc7\u6d4b\u8bd5\u6765\u63a8\u52a8\u6574\u4e2a\u5f00\u53d1\u7684\u8fdb\u884c.")),(0,l.kt)("p",null,"\u672c\u6587\u8be6\u7ec6\u63cf\u8ff0\u4e86\u5728\u521b\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"react-stillness-component")," \u7ec4\u4ef6\u7684\u8fc7\u7a0b\u4e2d, \u662f\u5982\u4f55\u5b66\u4e60 ",(0,l.kt)("strong",{parentName:"p"},"TDD")," \u7684\u601d\u60f3\u6765\u5b8c\u6210\u529f\u80fd\u5f00\u53d1\u4ee5\u53ca\u6d4b\u8bd5\u7684.\u5173\u4e8e\u7ec4\u4ef6\u5b9e\u73b0\u7684\u539f\u7406\u4ee5\u53ca\u7ec6\u8282,\u53ef\u4ee5\u67e5\u770b\u4e0a\u4e00\u7bc7\u6587\u7ae0 \u300areact \u4e2d\u5982\u4f55\u5b9e\u73b0 keep-alive \u6548\u679c\u300b"),(0,l.kt)("h2",{id:"\u4e00\u524d\u8a00-\u81ea\u52a8\u5316\u6d4b\u8bd5\u76f8\u5173"},"\u4e00.\u524d\u8a00-\u81ea\u52a8\u5316\u6d4b\u8bd5\u76f8\u5173"),(0,l.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u662f\u9488\u5bf9\u7f16\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"react"),"\u7ec4\u4ef6\u8fc7\u7a0b\u4e2d\u6240\u4ea7\u751f\u7684\u8d28\u91cf\u4e0e\u529f\u80fd\u4fdd\u969c\u7684\u89d2\u5ea6\u53bb\u5199\u7684,\u7531\u4e8e\u6d89\u53ca\u5230\u90e8\u5206\u7684\u540d\u8bcd,\u53ef\u80fd\u9700\u8981\u63d0\u524d\u6709\u90e8\u5206\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u76f8\u5173\u77e5\u8bc6;"),(0,l.kt)("p",null,"\u672c\u6587\u7684\u4fa7\u91cd\u70b9\u4e3b\u8981\u662f\u5728\u5982\u4f55\u8bbe\u8ba1\u4ee5\u53ca\u4e3a\u4f55\u8981\u4f7f\u7528 tdd \u7684\u65b9\u5f0f\u6765\u505a\u7ec4\u4ef6\u6d4b\u8bd5,\u6709\u4efb\u4f55\u7684\u95ee\u9898,\u4e5f\u6b22\u8fce\u4e0e\u4f5c\u8005\u8fdb\u884c\u8ba8\u8bba \ud83d\ude01"),(0,l.kt)("h2",{id:"\u4e8c\u6211\u6240\u8ba4\u4e3a\u7684-tdd-\u5b9e\u9645\u843d\u5730\u6d41\u7a0b"},"\u4e8c.\u6211\u6240\u8ba4\u4e3a\u7684 tdd \u5b9e\u9645\u843d\u5730\u6d41\u7a0b"),(0,l.kt)("p",null,"\u9996\u5148\u7b80\u5355\u56de\u987e\u4e00\u4e0b tdd:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tdd",src:t(61838).Z,width:"1488",height:"961"})),(0,l.kt)("p",null,"\u5bf9\u5e94\u7684\u5b9e\u9645\u884c\u4e3a\u53ef\u80fd\u662f(",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"\u6765\u6e90\u4e8e wiki"),")"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u8be5\u6d4b\u8bd5\u7528\u4f8b,\u5f97\u5230\u5931\u8d25\u7684\u7ed3\u679c(\u56e0\u4e3a\u8fd8\u6ca1\u6709\u5b9e\u73b0\u4efb\u4f55\u529f\u80fd)"),(0,l.kt)("li",{parentName:"ol"},"\u7f16\u5199\u521a\u597d\u80fd\u901a\u8fc7\u7684\u6700\u7b80\u5355\u7684\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u8fd0\u884c\u8be5\u6d4b\u8bd5\u7528\u4f8b,\u5f97\u5230\u6210\u529f\u7684\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e\u9700\u8981\u8fdb\u884c\u91cd\u6784,\u5e76\u4fdd\u8bc1\u6bcf\u6b21\u91cd\u6784\u4e4b\u540e\u90fd\u80fd\u901a\u8fc7\u4e4b\u524d\u7684\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u590d\u8fd9\u4e2a\u6b65\u9aa4,\u76f4\u81f3\u5b8c\u6210\u6574\u4e2a\u5f00\u53d1")),(0,l.kt)("p",null,"\u5f53\u7136,\u5728\u5b9e\u9645\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d,\u4f5c\u8005\u4e5f\u9488\u5bf9\u73b0\u5b9e\u60c5\u51b5\u505a\u4e86\u4e00\u5b9a\u7684\u6539\u9020,\u5148\u770b\u4e0b\u6539\u9020\u4e4b\u540e\u7684\u6d41\u7a0b:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"new flow",src:t(68722).Z,width:"1488",height:"2446"})),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u662f\u9488\u5bf9\u524d\u7aef\u7ec4\u4ef6\u573a\u666f\u589e\u52a0\u4e86\u4e00\u4e9b\u6bd4\u8f83\u91cd\u8981\u7684\u6b65\u9aa4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786e\u8ba4\u7528\u6237\u573a\u666f,\u5728\u4ec0\u4e48\u6837\u7684\u60c5\u51b5\u4e0b\u624d\u8003\u8651\u7528\u5230\u8fd9\u4e2a\u7ec4\u4ef6?\u5305\u62ec\u4e86\u666e\u901a\u7528\u6237\u548c\u4e13\u4e1a\u7528\u6237\u6d89\u53ca\u5230\u7684\u573a\u666f.\u9700\u8981\u8003\u8651\u5230\u6d89\u53ca\u5230 UI \u6846\u67b6\u7684\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u8ba4\u7528\u6237\u884c\u4e3a,\u4e5f\u5c31\u662f\u7528\u6237\u7684\u5177\u4f53\u64cd\u4f5c\u662f\u4ec0\u4e48?\u53ef\u4ee5\u5148\u4ece\u81ea\u8eab\u7684\u89d2\u5ea6\u51fa\u53d1,\u518d\u8fdb\u884c\u5b9e\u9645\u8c03\u7814,\u89c2\u5bdf\u7c7b\u4f3c\u7684\u7ec4\u4ef6\u662f\u5982\u4f55\u88ab\u4f7f\u7528\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u8ba4\u7528\u6237\u73af\u5883,\u8fd9\u91cc\u7684\u73af\u5883\u5305\u62ec\u4e86\u73b0\u4ee3\u6d4f\u89c8\u5668\u73af\u5883\u4ee5\u53ca\u6846\u67b6\u81ea\u8eab\u6240\u5904\u7684\u5f00\u53d1\u73af\u5883.")),(0,l.kt)("p",null,"\u5728\u6bcf\u6b21\u5b8c\u6210\u6d4b\u8bd5\u7528\u4f8b\u7f16\u5199\u4e4b\u524d\u5148\u662f\u786e\u8ba4\u73af\u8282,\u4fdd\u8bc1\u529f\u80fd\u4e0d\u504f\u79bb\u521d\u5fc3;\u5728\u6bcf\u6b21\u6d4b\u8bd5\u5b8c\u4e4b\u540e,\u518d\u8fdb\u884c\u9a8c\u8bc1,\u800c\u9a8c\u8bc1\u7684\u624b\u6bb5\u53ef\u4ee5\u662f BDD(\u540e\u6587\u4f1a\u63d0\u5230)\u4e5f\u53ef\u4ee5\u7ed3\u5408\u73b0\u5b9e\u7ebf\u4e0a\u4f8b\u5b50\u8fdb\u884c\u7ed3\u5408\u8003\u8651,\u5982\u679c\u53ef\u4ee5\u89e3\u51b3\u5b9e\u9645\u95ee\u9898,\u5219\u8bc1\u660e\u529f\u80fd\u5df2\u5b8c\u6210."),(0,l.kt)("p",null,"\u5f53\u7136,\u7531\u4e8e\u4f5c\u8005\u672c\u8eab\u7684\u65e5\u5e38\u4e60\u60ef\u662f\u5148\u5217\u8ba1\u5212 \ud83d\ude02,\u8fd9\u6b21\u4e5f\u4e0d\u4f8b\u5916:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mind node1",src:t(34617).Z,width:"3304",height:"5486"})),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6700\u4e0b\u9762\u7684\u90e8\u5206\u5c31\u662f\u4e0e TDD \u76f8\u5173\u7684\u6d4b\u8bd5\u7528\u4f8b\u89c4\u5212,\u5b9e\u9645\u7f16\u5199\u7528\u4f8b\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u989d\u5916\u7684\u60c5\u51b5,\u56e0\u6b64\u7b2c\u4e8c\u4e2a\u90e8\u5206\u4e5f\u5c31\u662f e2e \u6a21\u62df\u6d4b\u8bd5\u5c31\u662f\u6846\u5b9a\u7684\u4f7f\u7528\u8303\u56f4,\u7b2c\u4e00\u671f\u53ea\u8981\u4e0d\u8d85\u51fa\u5373\u53ef."),(0,l.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u5b9e\u9645\u6848\u4f8b"),(0,l.kt)("h2",{id:"\u4e09\u5b9e\u9645\u6848\u4f8b"},"\u4e09.\u5b9e\u9645\u6848\u4f8b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e2d\u4f7f\u7528\u7684\u6d4b\u8bd5\u6846\u67b6\u4e3a",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://jestjs.io/"},"jest")),",\u76f8\u5173\u914d\u7f6e\u53ef\u53c2\u8003\u95ee\u9898\u6c47\u603b\u7684\u7b2c\u4e00\u70b9")),(0,l.kt)("h3",{id:"provider"},"provider"),(0,l.kt)("p",null,"\u9996\u5148\u4ece\u6700\u5916\u5c42\u5f00\u59cb,\u8be5\u7ec4\u4ef6\u5185\u90e8\u5927\u91cf\u4f7f\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"context"),",\u56e0\u6b64,\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u5168\u5c40\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"provider"),",\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"provider"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\u6765\u6e90\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"createStillnessManager()"),",\u6240\u4ee5\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u5c31\u662f\u5224\u65ad\u5f53\u63d0\u4f9b\u4e86\u8fd9\u4e2a\u65b9\u6cd5\u7684\u65f6\u5019,",(0,l.kt)("inlineCode",{parentName:"p"},"provider"),"\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"it('Verify that the StillnessManager is correct', () => {\n  let capturedManager;\n  let manager = createStillnessManager(); // let mockManager: any = jest.fn();\n\n  render(\n    <StillnessContext.Provider value={{ stillnessManager: manager }}>\n      <StillnessContext.Consumer>\n        {({ stillnessManager }) => {\n          capturedManager = stillnessManager;\n          return null;\n        }}\n      </StillnessContext.Consumer>\n    </StillnessContext.Provider>\n  );\n\n  expect(capturedManager).toBe(manager);\n});\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u524d\u671f\u4f7f\u7528\u7684\u5176\u5b9e\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"jest mock functions"),",\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"createStillnessManager()"),"\u7f16\u5199\u5b8c\u6210\u4e4b\u540e,\u624d\u88ab\u66ff\u6362\u6210\u771f\u5b9e\u7684\u51fd\u6570,\u4e24\u8005\u7684\u533a\u522b\u5728\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"mock"),"\u7684\u65b9\u5f0f\u53ef\u4ee5\u8fc7\u6ee4\u6389",(0,l.kt)("inlineCode",{parentName:"p"},"provider"),"\u7f16\u5199\u4ee3\u7801\u65f6\u7684\u5e72\u6270\u9879"),(0,l.kt)("p",null,"\u90a3\u6211\u4eec\u73b0\u5728\u5c31\u53ef\u4ee5\u5f00\u59cb ",(0,l.kt)("inlineCode",{parentName:"p"},"run test")," \u4e86,\u5f53\u7136,\u8fd9\u65f6\u7531\u4e8e\u4ee3\u7801\u5df2\u7f16\u5199\u5b8c\u6bd5,\u65e0\u8bba\u662f\u4f7f\u7528\u771f\u5b9e\u7684\u53c2\u6570\u8fd8\u662f\u6a21\u62df\u7684\u53c2\u6570\u90fd\u53ef\u4ee5\u5f97\u5230\u6210\u529f\u7684\u4f8b\u5b50."),(0,l.kt)("p",null,"\u800c\u5728\u4e00\u5f00\u59cb,\u672a\u7f16\u5199\u4ee3\u7801\u65f6,\u5c31\u53ef\u4ee5\u9075\u5faa\u6d41\u7a0b,\u7f16\u5199\u771f\u5b9e\u4ee3\u7801\u4e86."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"provider"),"\u9664\u4e86\u521d\u59cb\u5316\u4e4b\u5916,\u5f53\u7136\u8fd8\u4f1a\u6709\u5176\u4ed6\u529f\u80fd,\u6bd4\u5982:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5378\u8f7d\u65f6\u4f1a\u81ea\u52a8\u6e05\u9664\u5168\u5c40\u7684\u7f13\u5b58\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u9884\u9632\u591a\u4e2a provider \u5d4c\u5957\u4ea7\u751f\u7684\u9519\u8bef,\u9700\u8981\u4e3b\u52a8\u63d0\u9192\u7528\u6237")),(0,l.kt)("p",null,"\u800c\u9488\u5bf9\u8fd9\u4e24\u70b9,\u6211\u4eec\u5c31\u53ef\u4ee5\u7ee7\u7eed\u5199\u6d4b\u8bd5\u7528\u4f8b\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"it('stores StillnessManager in global context and cleans up on unmount', () => {\n  let capturedManager;\n\n  const { container, unmount } = render(\n    <StillnessProvider>\n      <StillnessContext.Consumer>\n        {({ stillnessManager }) => {\n          capturedManager = stillnessManager;\n          return null;\n        }}\n      </StillnessContext.Consumer>\n    </StillnessProvider>\n  );\n\n  const globalInstance = () => (global as any)[INSTANCE_SYM] as any;\n\n  expect(globalInstance().stillnessManager).toEqual(capturedManager);\n  unmount();\n  expect(globalInstance()).toEqual(null);\n});\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230,\u8fd9\u91cc\u901a\u8fc7\u8c03\u7528\u8fd4\u56de\u7684\u65b9\u6cd5,\u4ece\u800c\u8fbe\u5230\u4e86\u6a21\u62df\u5378\u8f7d\u7684\u6548\u679c."),(0,l.kt)("h3",{id:"class-component"},"class Component"),(0,l.kt)("p",null,"\u9996\u5148\u6765\u770b\u4e0b\u6574\u4e2a\u5e93\u7684\u6838\u5fc3, ",(0,l.kt)("inlineCode",{parentName:"p"},"<OffscreeenComponent>"),",\u76f8\u6bd4\u8f83\u7ecf\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"HOC"),"\u5305\u88c5\u4e4b\u540e\u7684\u7ec4\u4ef6,\u539f\u59cb\u7ec4\u4ef6\u7684 props \u5c31\u8981\u590d\u6742\u7684\u591a\u4e86"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"uniqueId: UniqueId;"),(0,l.kt)("li",{parentName:"ul"},"parentId: UniqueId;"),(0,l.kt)("li",{parentName:"ul"},"parentIsStillness: boolean;"),(0,l.kt)("li",{parentName:"ul"},"isStillness: boolean;"),(0,l.kt)("li",{parentName:"ul"},"stillnessManager: StillnessManager;")),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7528\u4f8b\u4e5f\u56f4\u7ed5\u8fd9\u51e0\u70b9\u5373\u53ef,\u4e3e\u4e2a\u4f8b\u5b50:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"it('Does it prompt an error message when there is no context?', () => {\n  global.console.error = jest.fn();\n\n  expect(() => {\n    render(\n      <OffscreenComponent\n        visible={true}\n        isStillness={false}\n        uniqueId=\"test1\"\n        parentId={rootId}\n        parentIsStillness={false}\n      >\n        <div />\n      </OffscreenComponent>\n    );\n  }).toThrow(/stillnessManager is required/i);\n});\n")),(0,l.kt)("p",null,"\u7ec4\u4ef6\u662f\u6ca1\u529e\u6cd5\u5728\u7f3a\u5c11 ",(0,l.kt)("inlineCode",{parentName:"p"},"context")," \u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u7684,\u90a3\u6211\u4eec\u5728\u7f16\u5199\u4f8b\u5b50\u7684\u65f6\u5019\u53ea\u8981\u6392\u9664\u8fd9\u4e2a\u53c2\u6570\u5c31\u884c,\u5982\u679c\u7ec4\u4ef6\u6355\u83b7\u4e86\u5f02\u5e38\u5e76\u629b\u51fa\u4e86,\u5219\u8bf4\u660e\u529f\u80fd\u662f ok \u7684,\u8fd9\u4e2a\u5c5e\u4e8e\u8f83\u4e3a\u7b80\u5355\u7684\u4f8b\u5b50"),(0,l.kt)("p",null,"\u6765\u770b\u4e00\u4e2a\u66f4\u52a0\u590d\u6742\u7684:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"it('When the passed isStillness changes, clear the corresponding dom element or reload the original one', async () => {\n  const Demo = ({ isStillness }: any) => {\n    return (\n      <OffscreenComponent\n        visible={true}\n        isStillness={isStillness}\n        uniqueId=\"test1\"\n        stillnessManager={mockStillnessManager()}\n        parentId={rootId}\n        parentIsStillness={false}\n      >\n        <div data-testid=\"content\" />\n      </OffscreenComponent>\n    );\n  };\n\n  const { queryByTestId, rerender } = render(<Demo isStillness={false} />);\n\n  rerender(<Demo isStillness={true} />);\n  expect(queryByTestId('content')).not.toBeInTheDocument();\n\n  rerender(<Demo isStillness={false} />);\n  expect(queryByTestId('content')).toBeInTheDocument();\n});\n")),(0,l.kt)("p",null,"\u7ec4\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"isStillness"),"\u5c5e\u6027\u662f\u6bd4\u8f83\u91cd\u8981\u7684,\u4e5f\u662f\u7528\u6765\u63a7\u5236\u7ec4\u4ef6\u7684\u9759\u6b62\u4e0e\u5426\u7684\u6761\u4ef6,\u5728\u8fd9\u91cc\u901a\u8fc7\u771f\u5b9e\u6a21\u62df",(0,l.kt)("inlineCode",{parentName:"p"},"render"),",\u5e76\u901a\u8fc7\u4fee\u6539\u4f20\u53c2\u7684\u65b9\u6cd5,\u6765\u76f4\u63a5\u6a21\u62df\u6548\u679c,\u5982\u679c\u4f20\u9012\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"true"),",\u5219\u7ec4\u4ef6\u5e94\u8be5\u4f1a\u6e32\u67d3\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u4e2d,\u4e5f\u5c31\u662f\u67e5\u627e",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"content"),"\u7684\u5143\u7d20\u4e00\u5b9a\u53ef\u4ee5\u627e\u5230,\u53cd\u4e4b\u5c31\u627e\u4e0d\u5230."),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u6cd5,\u5c31\u53ef\u4ee5\u6d4b\u8bd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"class Component")),(0,l.kt)("p",null,"\u66f4\u591a\u4f8b\u5b50\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/leomYili/react-stillness-component/blob/main/packages/react-stillness/src/components/__tests__/Offscreen.spec.tsx"},"Offscreen.spec.tsx")),(0,l.kt)("h3",{id:"hoc"},"HOC"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HOC"),"\u662f\u5982\u4f55\u8fdb\u884c\u6d4b\u8bd5\u7684\u5462,\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"<Offscreen>"),"\u7ec4\u4ef6\u4e3a\u4f8b:"),(0,l.kt)("p",null,"\u5176 ",(0,l.kt)("inlineCode",{parentName:"p"},"props")," \u4e3a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"visible:boolean \u7c7b\u578b,\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u9759\u6b62"),(0,l.kt)("li",{parentName:"ul"},"type:string or number,\u6807\u8bc6\u7ec4\u4ef6\u7684\u7c7b\u578b,\u53ef\u91cd\u590d,\u540c\u4e00\u7c7b\u578b\u7684\u9759\u6b62\u884c\u4e3a\u4f1a\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},"scrollRest:boolean \u7c7b\u578b,\u63a7\u5236\u7ec4\u4ef6\u9759\u6b62\u65f6\u662f\u5426\u7f13\u5b58\u6eda\u52a8\u4f4d\u7f6e")),(0,l.kt)("p",null,"\u4f46\u8fd9\u4e9b",(0,l.kt)("inlineCode",{parentName:"p"},"props"),"\u5b9e\u9645\u4e0a\u662f\u7ecf\u8fc7\u5904\u7406\u4f20\u9012\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"<OffscreenComponent>"),"\u7ec4\u4ef6\u7684,"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"HOC"),"\u81ea\u8eab\u6765\u8bf4,\u53ea\u9700\u8981\u4fdd\u8bc1\u5728\u672a\u627e\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"context"),"\u65f6\u8fdb\u884c\u6355\u83b7\u5f02\u5e38\u5373\u53ef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"it('throw an error if rendered', () => {\n  console.error = jest.fn();\n\n  class TestClass extends React.Component<\n    React.PropsWithChildren<OffscreenInnerProps>\n  > {}\n\n  const DecoratedClass = withNodeBridge(TestClass);\n\n  expect(() => {\n    render(<DecoratedClass visible />);\n  }).toThrow(/Expected stillness component context/);\n});\n")),(0,l.kt)("p",null,"\u81f3\u4e8e\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"props"),",\u7531\u4e8e\u6d89\u53ca\u5230\u4e86\u5176\u4ed6\u6a21\u5757,\u5c5e\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"BDD"),"\u6d4b\u8bd5\u7684\u8303\u7574\u4e86,\u4f1a\u5728\u4e0b\u4e00\u7bc7 BDD \u6d4b\u8bd5\u76f8\u5173\u8fdb\u884c\u4ecb\u7ecd"),(0,l.kt)("h3",{id:"hooks"},"hooks"),(0,l.kt)("p",null,"\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"hooks"),"\u76f8\u5173,\u9700\u8981\u7528\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks")," \u8be5\u5e93\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c hooks \u5e76\u65ad\u8a00\u7ed3\u679c"),(0,l.kt)("p",null,"\u4e3e\u4f8b\u8bf4\u660e:"),(0,l.kt)("p",null,"\u73b0\u5728\u6709\u4e00\u4e2a\u6839\u636e\u4f9d\u8d56\u9879\u4ece\u800c\u8fd4\u56de\u6700\u65b0\u7ed3\u679c\u7684 hooks ",(0,l.kt)("inlineCode",{parentName:"p"},"useOptionalFactory")),(0,l.kt)("p",null,"\u4ee3\u7801\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function useOptionalFactory<T>(\n  arg: FactoryOrInstance<T>,\n  deps?: unknown[]\n): T {\n  const memoDeps = [...(deps || [])];\n  if (deps == null && typeof arg !== 'function') {\n    memoDeps.push(arg);\n  }\n  return useMemo<T>(() => {\n    return typeof arg === 'function' ? (arg as () => T)() : (arg as T);\n  }, memoDeps);\n}\n")),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7528\u4f8b\u7684\u4ee3\u7801\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { renderHook, act } from '@testing-library/react-hooks';\n\nconst useTest = () => {\n  const [count, setCount] = React.useState(0);\n\n  const addCount = () => {\n    setCount(count + 1);\n  };\n\n  const optionFactoryFn = useOptionalFactory(\n    () => ({\n      collect: () => {\n        return {};\n      },\n    }),\n    [count]\n  );\n\n  return { addCount, optionFactoryFn };\n};\n\ndescribe('useOptionalFactory', () => {\n  let hook;\n  it('Depending on the variation of the dependency value, different results are generated', () => {\n    act(() => {\n      hook = renderHook(() => useTest());\n    });\n\n    let memoValue = hook.result.current.optionFactoryFn;\n\n    act(() => {\n      hook.result.current.addCount();\n    });\n\n    expect(memoValue).not.toStrictEqual(hook.result.current.optionFactoryFn);\n  });\n});\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"renderHooks()")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"act()"),",\u5373\u53ef\u7b80\u5355\u8fdb\u884c\u6d4b\u8bd5,\u5f53\u6d4b\u8bd5\u7684\u4f9d\u8d56\u9879\u53d8\u5316\u65f6,\u8fd4\u56de\u503c\u5219\u8ddf\u968f\u8fdb\u884c\u53d8\u5316."),(0,l.kt)("h2",{id:"\u56db\u95ee\u9898\u6c47\u603b"},"\u56db.\u95ee\u9898\u6c47\u603b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u642d\u5efa\u6d4b\u8bd5\u73af\u5883?"),(0,l.kt)("p",{parentName:"li"},"\u6574\u4f53\u67b6\u6784\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"lerna+Typescript+React+rollup+Jest"),",\u5176\u5b9e\u793e\u533a\u4e5f\u6709\u4e86\u5f88\u591a\u7684\u5b9e\u4f8b\u4e86,\u8fd9\u91cc\u53ea\u4ecb\u7ecd\u642d\u5efa\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898,"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u5355\u72ec\u642d\u5efa\u5b50\u5305\u7684\u6d4b\u8bd5\u73af\u5883?\nlerna \u7684\u67b6\u6784,\u5f88\u597d\u7684\u5206\u79bb\u4e86\u6bcf\u4e2a\u5305\u7684\u73af\u5883,\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u6d4b\u8bd5\u6846\u67b6\u5728\u6bcf\u4e2a\u5b50\u5305\u4e2d,\u5355\u72ec\u914d\u7f6e,\u4e3e\u4f8b:\n",(0,l.kt)("img",{alt:"13",src:t(58097).Z,width:"702",height:"666"}),"\n\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5305\u4e2d\u914d\u7f6e\u4e0d\u540c\u7684 ",(0,l.kt)("strong",{parentName:"p"},"jest.config"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u4ee3\u7801\u4e5f\u5e0c\u671b\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Typescript"),"?"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// jest-transformer.js\nconst babelJest = require('babel-jest');\n\nmodule.exports = babelJest.createTransformer({\n  presets: [\n    [\n      '@babel/preset-env',\n      {\n        targets: {\n          node: 'current',\n          esmodules: true,\n        },\n        bugfixes: true,\n        loose: true,\n      },\n    ],\n    '@babel/preset-typescript',\n  ],\n  plugins: [\n    ['@babel/plugin-proposal-class-properties', { loose: true }],\n    '@babel/plugin-transform-react-jsx',\n    ['@babel/plugin-proposal-private-methods', { loose: true }],\n    [\n      '@babel/plugin-proposal-private-property-in-object',\n      { loose: true },\n    ],\n    '@babel/plugin-proposal-object-rest-spread',\n    '@babel/plugin-transform-runtime',\n  ],\n});\n\n//jest.config.js\nmodule.exports = {\n  setupFilesAfterEnv: ['./jest-setup.ts'],\n  testMatch: [\"**/__tests__/**/?(*.)(spec|test).[jt]s?(x)\"],\n  // testRegex: 'decorateHandler.spec.tsx',\n  transform: {\n    \"\\\\.[jt]sx?$\": \"./jest-transformer.js\",\n  },\n  collectCoverageFrom: [\n    '**/src/**/*.tsx',\n    '**/src/**/*.ts',\n    '!**/__tests__/**',\n    '!**/dist/**',\n  ],\n  globals: {\n    __DEV__: true,\n  },\n};\n")),(0,l.kt)("p",{parentName:"li"},"\u53ea\u9700\u8981\u589e\u52a0transform\u914d\u7f6e\u5373\u53ef")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u6d4b\u8bd5\u5b9e\u9645\u7684\u6e32\u67d3\u6548\u679c?"),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},(0,l.kt)("inlineCode",{parentName:"a"},"@testing-library/jest-dom")),",\u8be5\u5e93\u63d0\u4f9b\u4e86\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"DOM")," \u72b6\u6001\u7684\u76f8\u5173 ",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," \u5339\u914d\u5668,\u53ef\u7528\u6765\u68c0\u67e5\u5143\u7d20\u7684\u6811\u5f62,\u6587\u672c,\u6837\u5f0f\u7b49,\u672c\u6587\u4e5f\u4ecb\u7ecd\u4e86\u4e00\u4e9b,\u6bd4\u5982:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"toBeInTheDocument:\u5224\u65ad\u6587\u6863\u4e2d\u662f\u5426\u5b58\u5728\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"toHaveClass:\u5224\u65ad\u7ed9\u5b9a\u5143\u7d20\u4e2d\u662f\u5426\u5728\u5176class\u5c5e\u6027\u4e2d\u5177\u6709\u76f8\u5e94\u7684\u7c7b\u540d"),(0,l.kt)("li",{parentName:"ul"},"toBeVisible:\u5224\u65ad\u7ed9\u5b9a\u5143\u7d20\u662f\u5426\u5bf9\u7528\u6237\u53ef\u89c1"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u60f3\u8981\u5355\u72ec\u6d4b\u8bd5\u67d0\u4e00\u4e2a\u4f8b\u5b50\u600e\u4e48\u529e?"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//jest.config.js\nmodule.exports = {\n  setupFilesAfterEnv: ['./jest-setup.ts'],\n  //testMatch: [\"**/__tests__/**/?(*.)(spec|test).[jt]s?(x)\"],\n  testRegex: 'decorateHandler.spec.tsx',\n  transform: {\n    \"\\\\.[jt]sx?$\": \"./jest-transformer.js\",\n  },\n  collectCoverageFrom: [\n    '**/src/**/*.tsx',\n    '**/src/**/*.ts',\n    '!**/__tests__/**',\n    '!**/dist/**',\n  ],\n  globals: {\n    __DEV__: true,\n  },\n};\n")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u7b80\u5355\u7684\u4fee\u6539\u914d\u7f6e\u6587\u4ef6,\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"testRegex"),"\u9488\u5bf9\u67d0\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u6d4b\u8bd5,\u5f53\u7136,\u8fd9\u91cc\u4f5c\u8005\u53ea\u662f\u5217\u51fa\u4e86\u81ea\u8eab\u8ba4\u4e3a\u6bd4\u8f83\u7b80\u5355\u7684\u65b9\u6cd5,\u5982\u679c\u6709\u66f4\u7b80\u5355\u7684\u65b9\u6cd5,\u6b22\u8fce\u63d0\u51fa\ud83d\udc4f\ud83d\udc4f"))),(0,l.kt)("h2",{id:"\u4e94\u603b\u7ed3"},"\u4e94.\u603b\u7ed3"),(0,l.kt)("p",null,"\u672c\u6587\u603b\u7ed3\u4e86\u5728\u7f16\u5199\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"react")," \u7ec4\u4ef6\u7684\u8fc7\u7a0b\u4e2d\u662f\u5982\u4f55\u601d\u8003\u4ee5\u53ca\u7ec4\u7ec7\u6d4b\u8bd5\u4ee3\u7801\u7684,\u5f53\u7136,\u5728\u5b9e\u9645\u7684\u751f\u4ea7\u5f00\u53d1\u9636\u6bb5,\u6709\u4e00\u5b9a\u7684\u6d4b\u8bd5\u65f6\u95f4\u624d\u662f\u6700\u5b9d\u8d35\u7684,\u4e5f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"TDD")," \u6d4b\u8bd5\u80fd\u63a8\u884c\u7684\u57fa\u7840,\u5982\u679c\u8bf4 ",(0,l.kt)("inlineCode",{parentName:"p"},"TDD")," \u6d4b\u8bd5\u4fdd\u8bc1\u4e86\u57fa\u7840\u529f\u80fd,\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"p"},"BDD")," \u6d4b\u8bd5\u5219\u6269\u5c55\u4e86\u4f7f\u7528\u573a\u666f;"),(0,l.kt)("p",null,"\u6309\u7167\u4ee3\u7801\u6bd4\u4f8b\u6765\u8bf4,\u4f5c\u8005\u81ea\u8eab\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"TDD")," \u5360 70%,\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"BDD")," \u5219\u5360\u5230\u5269\u4e0b\u7684 30%;"),(0,l.kt)("p",null,"\u8fd9\u91cc\u9762\u662f\u6027\u4ef7\u6bd4\u7684\u8003\u91cf,\u6bd5\u7adf\u65e5\u5e38\u5de5\u4f5c\u4e2d,\u9700\u6c42\u7684\u6539\u52a8\u662f\u5f88\u9891\u7e41\u7684,\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u9047\u5230\u5404\u79cd\u4e0d\u540c\u7684\u573a\u666f,\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"TDD")," \u6d4b\u8bd5\u7528\u4f8b\u5927\u90e8\u5206\u4ecd\u7136\u53ef\u4ee5\u4fdd\u7559,\u4f46 ",(0,l.kt)("inlineCode",{parentName:"p"},"BDD")," \u6d4b\u8bd5\u5c31\u4e0d\u4e00\u5b9a\u4e86."),(0,l.kt)("p",null,"\u8fd9\u662f \u300a\u524d\u7aef\u5982\u4f55\u505a\u7ec4\u4ef6\u6d4b\u8bd5\u300b\u7684\u7b2c\u4e00\u7bc7,\u5982\u679c\u6709\u4efb\u4f55\u95ee\u9898,\u6b22\u8fce\u8ba8\u8bba."))}d.isMDXComponent=!0},61838:function(e,n,t){n.Z=t.p+"assets/images/10-b292ff3f70bb662646bd2af62c16decb.png"},68722:function(e,n,t){n.Z=t.p+"assets/images/11-bfe3dbd86b3d6ec48491d08c4dd9576c.png"},34617:function(e,n,t){n.Z=t.p+"assets/images/12-3e670b5914cec369cddaf409f58631ce.png"},58097:function(e,n,t){n.Z=t.p+"assets/images/13-bc684bb75fe9bfc7cad728d436e283d0.png"}}]);