---
id: get-started
title: 快速上手
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

> React-stillness-component 是一个 [npm packages](https://www.npmjs.com/package/react-stillness-component).

:::info

阅读 **[简介](intro.md)** 来简单了解它的运作原理!

:::

## 安装

推荐使用 yarn 管理 npm 依赖，并使用国内源加速

````mdx-code-block
<Tabs>
<TabItem value="yarn">

```bash
yarn add react-stillness-component
```

</TabItem>
<TabItem value="npm">

```bash
npm install react-stillness-component
```

</TabItem>
<TabItem value="pnpm">

```bash
pnpm add react-stillness-component
```

</TabItem>
</Tabs>
````

## 使用

组件中大量使用到了`Hooks`，所以需要引入`React 16.8+`

1. 为你的项目引入 [`<StillnessProvider>`](api/Components/stillnessProvider) 并尽量放置在顶层

    ```jsx title='index.js'
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { StillnessProvider } from 'react-stillness-component';
    import App from './App';

    ReactDOM.render(
      <StillnessProvider>
        <App />
      </StillnessProvider>，
    document.getElementById('root') );
    ```

2. 使用 [`<Offscreen>`](api/Components/Offscreen) 包裹你需要静止的组件

    ```jsx
    ...
    function App() {
      const [show, setShow] = useState(true)

      return (
        <div>
          <button onClick={() => setShow(show => !show)}>Toggle</button>
          // highlight-start
          <Offscreen visible={show}>
            <Count />
          </Offscreen>
          // highlight-end
        </div>
      );
    }
    ...
    ```

3. 静止组件控制，使用 [`useStillness`](api/Hooks/useStillness) 或者 [`connectStillness`](api/Decorators/connectStillness) 去监听相关的静止行为，以及手动控制静止状态

    ```jsx
    import { Offscreen,useStillness } from 'react-stillness-component';

    function Count() {
      const [count, setCount] = useState(0);
      const collected = useStillness({
        mounted: (contract) => {
          return 'mounted';
        },
        unmounted: (contract) => {
          return 'unmounted';
        },
        collect: (contract) => {
          return {
            isStillness: contract.isStillness(),
            stillnessId: contract.getStillnessId(),
            unset: contract.unset, // function
            clear: contract.clear, // function
          };
        },
      });

      return (
        <div className="count">
          <p>{collected.isStillness}</p>
          <p>class count: {count}</p>
          <button
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            Add
          </button>
        </div>
      );
    }
    ```

更多信息请查看[API](/docs/category/api)文档

## TypeScript支持 {#typescript-support}

本项目使用**TypeScript**语言进行开发，并提供了完整的定义，可以预览组件属性输入建议和定义检查的功能

![code](/img/code1.png)