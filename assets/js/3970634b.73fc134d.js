"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[444],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43042:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Doing Component Testing with TDD Ideas",description:"This is my first blog post about front-end automation testing.",date:"2022-09-24T13:20",slug:"tdd-test",authors:"leomYili",tags:["TDD","test"],hide_table_of_contents:!1},l=void 0,p={permalink:"/react-stillness-component/blog/tdd-test",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/blog/\u7528TDD\u7684\u601d\u60f3\u505a\u7ec4\u4ef6\u6d4b\u8bd5.md",source:"@site/blog/\u7528TDD\u7684\u601d\u60f3\u505a\u7ec4\u4ef6\u6d4b\u8bd5.md",title:"Doing Component Testing with TDD Ideas",description:"This is my first blog post about front-end automation testing.",date:"2022-09-24T13:20:00.000Z",formattedDate:"September 24, 2022",tags:[{label:"TDD",permalink:"/react-stillness-component/blog/tags/tdd"},{label:"test",permalink:"/react-stillness-component/blog/tags/test"}],readingTime:6.69,truncated:!1,authors:[{name:"leomYili",title:"creator",url:"https://github.com/leomYili",imageURL:"https://avatars.githubusercontent.com/u/17920032?v=4",key:"leomYili"}],frontMatter:{title:"Doing Component Testing with TDD Ideas",description:"This is my first blog post about front-end automation testing.",date:"2022-09-24T13:20",slug:"tdd-test",authors:"leomYili",tags:["TDD","test"],hide_table_of_contents:!1},nextItem:{title:"How to implement keep-alive in react",permalink:"/react-stillness-component/blog/realization react-stillness-component"}},c={authorsImageUrls:[void 0]},u=[{value:"I. Preface - automation testing related",id:"i-preface---automation-testing-related",level:2},{value:"II. I think the actual implementation process of tdd",id:"ii-i-think-the-actual-implementation-process-of-tdd",level:2},{value:"III. Actual cases",id:"iii-actual-cases",level:2},{value:"provider",id:"provider",level:3},{value:"class Component",id:"class-component",level:3},{value:"HOC",id:"hoc",level:3},{value:"hooks",id:"hooks",level:3},{value:"IV. Summary of questions",id:"iv-summary-of-questions",level:2},{value:"V. Summary",id:"v-summary",level:2}],m={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Test-Driven Development (hereinafter referred to as ",(0,r.kt)("strong",{parentName:"p"},"TDD"),") is a design methodology in which unit test cases are written before the functional code is developed, and tests are used to drive the entire development process.")),(0,r.kt)("p",null,"This article describes in detail how to learn ",(0,r.kt)("strong",{parentName:"p"},"TDD")," in the process of creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-stillness-component"),' component to complete the functional development and testing. For more details on how the component is implemented, see the previous article "How to implement keep-alive in react".'),(0,r.kt)("h2",{id:"i-preface---automation-testing-related"},"I. Preface - automation testing related"),(0,r.kt)("p",null,"This article is written from the point of view of quality and functionality assurance in writing ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," components, which may require some prior knowledge of automation testing due to the terminology involved;"),(0,r.kt)("p",null,"The focus of this article is mainly on how to design and why to use the tdd way to do component testing, any questions, but also welcome to discuss with the author \ud83d\ude01"),(0,r.kt)("h2",{id:"ii-i-think-the-actual-implementation-process-of-tdd"},"II. I think the actual implementation process of tdd"),(0,r.kt)("p",null,"First, a brief review of tdd:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tdd",src:n(25520).Z,width:"1488",height:"961"})),(0,r.kt)("p",null,"The actual behavior corresponding to this might be (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"from wiki"),")"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"add a test case"),(0,r.kt)("li",{parentName:"ol"},"run the test case and get a failed result (because no functionality has been implemented yet)"),(0,r.kt)("li",{parentName:"ol"},"write the simplest code that just passes"),(0,r.kt)("li",{parentName:"ol"},"re-run the test case and get a successful result"),(0,r.kt)("li",{parentName:"ol"},"refactoring as needed, and ensure that each refactoring can pass the previous test cases"),(0,r.kt)("li",{parentName:"ol"},"repeat this step, until the completion of the entire development")),(0,r.kt)("p",null,"Of course, in the actual development process, the author also made some modifications to the reality of the situation, first look at the process after the transformation:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"new flow",src:n(52643).Z,width:"1488",height:"2446"})),(0,r.kt)("p",null,"Here is mainly for the front-end component scenario added some more important steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identify the user scenario, under what circumstances to consider using this component? This includes scenarios involving general users and professional users. Need to consider the scenario involving UI framework"),(0,r.kt)("li",{parentName:"ul"},"Confirm the user behavior, that is, what is the specific operation of the user? You can start from your own perspective, and then conduct actual research to observe how similar components are used"),(0,r.kt)("li",{parentName:"ul"},"Confirm the user environment, which includes the modern browser environment and the framework itself in the development environment.")),(0,r.kt)("p",null,"In each completed test case before writing the first is to confirm the link to ensure that the function does not deviate from the original intention; after each test, and then verify, and the means of verification can be BDD (will be mentioned later) can also be combined with the reality of online examples to consider, if you can solve the actual problem, then prove that the function has been completed."),(0,r.kt)("p",null,"Of course, as the author's own daily habit is to first list the plan \ud83d\ude02, this time is no exception:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mind node1",src:n(1829).Z,width:"3304",height:"5486"})),(0,r.kt)("p",null,"As you can see the bottom part is the test case planning related to TDD, there will be additional cases in the actual writing process, so the second part is the e2e simulation test is the scope of use of the box, the first phase as long as it does not exceed."),(0,r.kt)("p",null,"The following look at the actual case"),(0,r.kt)("h2",{id:"iii-actual-cases"},"III. Actual cases"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The test framework used in this paper is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://jestjs.io/"},"jest")),", the relevant configuration can refer to the first point of the summary of issues")),(0,r.kt)("h3",{id:"provider"},"provider"),(0,r.kt)("p",null,"First of all, starting from the outermost layer, the component makes extensive use of ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),", so it is necessary to provide a global ",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),", because the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," comes from ",(0,r.kt)("inlineCode",{parentName:"p"},"createStillnessManager()"),", so our first example is to determine whether ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," will work properly when this method is provided"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('Verify that the StillnessManager is correct', () => {\n  let capturedManager;\n  let manager = createStillnessManager(); // let mockManager: any = jest.fn();\n\n  render(\n    <StillnessContext.Provider value={{ stillnessManager: manager }}>\n      <StillnessContext.Consumer>\n        {({ stillnessManager }) => {\n          capturedManager = stillnessManager;\n          return null;\n        }}\n      </StillnessContext.Consumer>\n    </StillnessContext.Provider>\n  );\n\n  expect(capturedManager).toBe(manager);\n});\n")),(0,r.kt)("p",null,"The difference between the two is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"mock")," approach filters out the interference from the ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," when writing the code."),(0,r.kt)("p",null,"So we can now start the ",(0,r.kt)("inlineCode",{parentName:"p"},"run test"),", and of course, since the code is already written, we can get a successful example with either real or mocked arguments."),(0,r.kt)("p",null,"And at the beginning, when the code is not written, you can follow the process and write the real code."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"provider")," will have other functions besides initialization, of course, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"automatically clear the global cache object when unloading"),(0,r.kt)("li",{parentName:"ul"},"prevent multiple provider nesting errors, the need to actively alert the user")),(0,r.kt)("p",null,"And for these two points, we can continue to write test cases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('stores StillnessManager in global context and cleans up on unmount', () => {\n  let capturedManager;\n\n  const { container, unmount } = render(\n    <StillnessProvider>\n      <StillnessContext.Consumer>\n        {({ stillnessManager }) => {\n          capturedManager = stillnessManager;\n          return null;\n        }}\n      </StillnessContext.Consumer>\n    </StillnessProvider>\n  );\n\n  const globalInstance = () => (global as any)[INSTANCE_SYM] as any;\n\n  expect(globalInstance().stillnessManager).toEqual(capturedManager);\n  unmount();\n  expect(globalInstance()).toEqual(null);\n});\n")),(0,r.kt)("p",null,"As you can see, the effect of simulating unloading is achieved by calling the returned method."),(0,r.kt)("h3",{id:"class-component"},"class Component"),(0,r.kt)("p",null,"Let's look at the core of the library, ",(0,r.kt)("inlineCode",{parentName:"p"},"<OffscreeenComponent>"),", the props of the original component are much more complex compared to the component wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"HOC")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"uniqueId: UniqueId;"),(0,r.kt)("li",{parentName:"ul"},"parentId: UniqueId;"),(0,r.kt)("li",{parentName:"ul"},"parentIsStillness: boolean;"),(0,r.kt)("li",{parentName:"ul"},"isStillness: boolean;"),(0,r.kt)("li",{parentName:"ul"},"stillnessManager: StillnessManager;")),(0,r.kt)("p",null,"The test cases also revolve around these points, as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('Does it prompt an error message when there is no context?', () => {\n  global.console.error = jest.fn();\n\n  expect(() => {\n    render(\n      <OffscreenComponent\n        visible={true}\n        isStillness={false}\n        uniqueId=\"test1\"\n        parentId={rootId}\n        parentIsStillness={false}\n      >\n        <div />\n      </OffscreenComponent>\n    );\n  }).toThrow(/stillnessManager is required/i);\n});\n")),(0,r.kt)("p",null,"component is no way to run in the absence of ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),", then we just exclude this parameter when writing the example, if the component catches the exception and throws it, it means that the function is ok, this is a relatively simple example"),(0,r.kt)("p",null,"to see a more complex:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('When the passed isStillness changes, clear the corresponding dom element or reload the original one', async () => {\n  const Demo = ({ isStillness }: any) => {\n    return (\n      <OffscreenComponent\n        visible={true}\n        isStillness={isStillness}\n        uniqueId=\"test1\"\n        stillnessManager={mockStillnessManager()}\n        parentId={rootId}\n        parentIsStillness={false}\n      >\n        <div data-testid=\"content\" />\n      </OffscreenComponent>\n    );\n  };\n\n  const { queryByTestId, rerender } = render(<Demo isStillness={false} />);\n\n  rerender(<Demo isStillness={true} />);\n  expect(queryByTestId('content')).not.toBeInTheDocument();\n\n  rerender(<Demo isStillness={false} />);\n  expect(queryByTestId('content')).toBeInTheDocument();\n});\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isStillness")," property of the component is relatively important, but also used to control the conditions of the component is still or not, here through the real simulation of ",(0,r.kt)("inlineCode",{parentName:"p"},"render"),", and by modifying the method of passing the reference, to directly simulate the effect, if passed ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the component should be rendered in the ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),", that is, to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," element must be able to find, and vice versa, can not find."),(0,r.kt)("p",null,"In this way, we can test the ",(0,r.kt)("inlineCode",{parentName:"p"},"class Component"),"."),(0,r.kt)("p",null,"For more examples, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/leomYili/react-stillness-component/blob/main/packages/react-stillness/src/components/__tests__/Offscreen.spec.tsx"},"Offscreen.spec.tsx")),(0,r.kt)("h3",{id:"hoc"},"HOC"),(0,r.kt)("p",null,"How is the ",(0,r.kt)("inlineCode",{parentName:"p"},"HOC")," tested? Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Offscreen>")," component as an example:"),(0,r.kt)("p",null,"Its ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"visible:boolean, controls whether the component is static or not"),(0,r.kt)("li",{parentName:"ul"},"type: string or number, identifies the type of the component, repeatable, the same type of static behavior will remain the same"),(0,r.kt)("li",{parentName:"ul"},"scrollRest: boolean type, controls whether the component caches the scroll position when it is stationary")),(0,r.kt)("p",null,"But these ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," are actually processed and passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<OffscreenComponent>")," component,"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"HOC")," itself, it just needs to ensure that it catches exceptions when the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," is not found:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"it('throw an error if rendered', () => {\n  console.error = jest.fn();\n\n  class TestClass extends React.Component<\n    React.PropsWithChildren<OffscreenInnerProps>\n  > {}\n\n  const DecoratedClass = withNodeBridge(TestClass);\n\n  expect(() => {\n    render(<DecoratedClass visible />);\n  }).toThrow(/Expected stillness component context/);\n});\n")),(0,r.kt)("p",null,"As for the above ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),", since it involves other modules, it belongs to the scope of ",(0,r.kt)("inlineCode",{parentName:"p"},"BDD")," testing, which will be introduced in the next BDD testing related article"),(0,r.kt)("h3",{id:"hooks"},"hooks"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks")," related, you need to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks")," This library can directly run hooks and assert the results"),(0,r.kt)("p",null,"As an example:"),(0,r.kt)("p",null,"Now there is a hooks ",(0,r.kt)("inlineCode",{parentName:"p"},"useOptionalFactory")," that returns the latest results based on dependencies"),(0,r.kt)("p",null,"The code is :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function useOptionalFactory<T>(\n  arg: FactoryOrInstance<T>,\n  deps?: unknown[]\n): T {\n  const memoDeps = [...(deps || [])];\n  if (deps == null && typeof arg !== 'function') {\n    memoDeps.push(arg);\n  }\n  return useMemo<T>(() => {\n    return typeof arg === 'function' ? (arg as () => T)() : (arg as T);\n  }, memoDeps);\n}\n")),(0,r.kt)("p",null,"The code for the test case is :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { renderHook, act } from '@testing-library/react-hooks';\n\nconst useTest = () => {\n  const [count, setCount] = React.useState(0);\n\n  const addCount = () => {\n    setCount(count + 1);\n  };\n\n  const optionFactoryFn = useOptionalFactory(\n    () => ({\n      collect: () => {\n        return {};\n      },\n    }),\n    [count]\n  );\n\n  return { addCount, optionFactoryFn };\n};\n\ndescribe('useOptionalFactory', () => {\n  let hook;\n  it('Depending on the variation of the dependency value, different results are generated', () => {\n    act(() => {\n      hook = renderHook(() => useTest());\n    });\n\n    let memoValue = hook.result.current.optionFactoryFn;\n\n    act(() => {\n      hook.result.current.addCount();\n    });\n\n    expect(memoValue).not.toStrictEqual(hook.result.current.optionFactoryFn);\n  });\n});\n")),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"renderHooks()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"act()"),", you can simply test, and when the test dependencies change, the return value will follow the change."),(0,r.kt)("h2",{id:"iv-summary-of-questions"},"IV. Summary of questions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How to set up the test environment?"),(0,r.kt)("p",{parentName:"li"},"The overall architecture is ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna+Typescript+React+rollup+Jest"),", in fact, the community also has a lot of examples, here only to introduce the problems encountered in the process of building,"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How to build a separate test environment for sub-packages?\nlerna's architecture, a good separation of the environment of each package, you can use different test frameworks in each sub-package, individually configured, for example:\n",(0,r.kt)("img",{alt:"13",src:n(12943).Z,width:"702",height:"666"}),"\ncan be configured differently in each package")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Test code also want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Typescript"),"?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest-transformer.js\nconst babelJest = require('babel-jest');\n\nmodule.exports = babelJest.createTransformer({\n  presets: [\n    [\n      '@babel/preset-env',\n      {\n        targets: {\n          node: 'current',\n          esmodules: true,\n        },\n        bugfixes: true,\n        loose: true,\n      },\n    ],\n    '@babel/preset-typescript',\n  ],\n  plugins: [\n    ['@babel/plugin-proposal-class-properties', { loose: true }],\n    '@babel/plugin-transform-react-jsx',\n    ['@babel/plugin-proposal-private-methods', { loose: true }],\n    [\n      '@babel/plugin-proposal-private-property-in-object',\n      { loose: true },\n    ],\n    '@babel/plugin-proposal-object-rest-spread',\n    '@babel/plugin-transform-runtime',\n  ],\n});\n\n//jest.config.js\nmodule.exports = {\n  setupFilesAfterEnv: ['./jest-setup.ts'],\n  testMatch: [\"**/__tests__/**/?(*.)(spec|test).[jt]s?(x)\"],\n  // testRegex: 'decorateHandler.spec.tsx',\n  transform: {\n    \"\\\\.[jt]sx?$\": \"./jest-transformer.js\",\n  },\n  collectCoverageFrom: [\n    '**/src/**/*.tsx',\n    '**/src/**/*.ts',\n    '!**/__tests__/**',\n    '!**/dist/**',\n  ],\n  globals: {\n    __DEV__: true,\n  },\n};\n")),(0,r.kt)("p",{parentName:"li"},"Just add the transform configuration")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do I test the actual rendering?"),(0,r.kt)("p",{parentName:"li"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},(0,r.kt)("inlineCode",{parentName:"a"},"@testing-library/jest-dom")),", which provides related ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," matchers on the ",(0,r.kt)("inlineCode",{parentName:"p"},"DOM")," state, which can be used to check the tree, text, style, etc. of elements, which are also introduced in this article. Some of them, such as:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"toBeInTheDocument: to determine the existence of elements in the document"),(0,r.kt)("li",{parentName:"ul"},"toHaveClass: to determine whether the given element in its class attribute has the corresponding class name"),(0,r.kt)("li",{parentName:"ul"},"toBeVisible: determine whether the given element is visible to the user"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What if I want to test a particular example individually?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//jest.config.js\nmodule.exports = {\n  setupFilesAfterEnv: ['./jest-setup.ts'],\n  //testMatch: [\"**/__tests__/**/?(*.)(spec|test).[jt]s?(x)\"],\n  testRegex: 'decorateHandler.spec.tsx',\n  transform: {\n    \"\\\\.[jt]sx?$\": \"./jest-transformer.js\",\n  },\n  collectCoverageFrom: [\n    '**/src/**/*.tsx',\n    '**/src/**/*.ts',\n    '!**/__tests__/**',\n    '!**/dist/**',\n  ],\n  globals: {\n    __DEV__: true,\n  },\n};\n")),(0,r.kt)("p",{parentName:"li"},"\u53efYou can simply modify the configuration file, use ",(0,r.kt)("inlineCode",{parentName:"p"},"testRegex")," for a file to test, of course, here the author only listed their own think more simple method, if there is a more simple method, welcome to propose \ud83d\udc4f\ud83d\udc4f"))),(0,r.kt)("h2",{id:"v-summary"},"V. Summary"),(0,r.kt)("p",null,"This article summarizes how to think and organize the test code in the process of writing a ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," component, of course, in the actual production development stage, there is a certain amount of testing time is the most valuable, but also ",(0,r.kt)("inlineCode",{parentName:"p"},"TDD")," test can be implemented on the basis of, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"TDD")," test to ensure the basic functionality, then ",(0,r.kt)("inlineCode",{parentName:"p"},"BDD")," test is to expand the use of scenarios;"),(0,r.kt)("p",null,"According to the proportion of the code, the author himself believes that ",(0,r.kt)("inlineCode",{parentName:"p"},"TDD")," accounts for 70%, while ",(0,r.kt)("inlineCode",{parentName:"p"},"BDD")," is the remaining 30%;"),(0,r.kt)("p",null,"This is a cost-effective consideration, after all, in daily work, the requirements are changed very frequently, which means that the component may encounter a variety of different scenarios, and most of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TDD")," test cases can still be retained, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"BDD")," test is not necessarily."),(0,r.kt)("p",null,'This is the "front-end how to do component testing" of the first, if there are any questions, welcome to discuss.'))}d.isMDXComponent=!0},25520:function(e,t,n){t.Z=n.p+"assets/images/10-b292ff3f70bb662646bd2af62c16decb.png"},52643:function(e,t,n){t.Z=n.p+"assets/images/11-bfe3dbd86b3d6ec48491d08c4dd9576c.png"},1829:function(e,t,n){t.Z=n.p+"assets/images/12-3e670b5914cec369cddaf409f58631ce.png"},12943:function(e,t,n){t.Z=n.p+"assets/images/13-bc684bb75fe9bfc7cad728d436e283d0.png"}}]);