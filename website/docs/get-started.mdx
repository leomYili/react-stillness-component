---
id: get-started
title: Get-started
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

> React-stillness-component is a [npm packages](https://www.npmjs.com/package/react-stillness-component).

:::info

Read **[Intro](intro.md)** to get a brief idea of how it works!

:::

## Install

Recommended use of yarn to manage npm dependencies

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

## usage

The component makes extensive use of `Hooks`, so it is necessary to introduce `React 16.8+`

1. Introduce [`<StillnessProvider>`](api/Components/stillnessProvider) to your project and try to place it at the top level

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

2. Use [`<Offscreen>`](api/Components/Offscreen) to wrap the components you need to be stillness

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

3. Stillness-component control, using [`useStillness`](api/Hooks/useStillness) or [`connectStillness`](api/Decorators/connectStillness) to listen for relevant stillness behavior and to manually control the stillness state

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

For more information, please see the [API](/docs/category/api) documentation

## TypeScript support {#typescript-support}

This project was developed using the **TypeScript** language and provides a full definition with the ability to preview component property input suggestions and definition checks

![code](/img/code1.png)