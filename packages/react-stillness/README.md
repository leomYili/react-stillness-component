[![npm version](https://img.shields.io/npm/v/react-stillness-component?color=%23007ec6&style=flat-square)](https://www.npmjs.com/package/react-stillness-component) [![package size](https://img.shields.io/bundlephobia/min/react-stillness-component?style=flat-square)](https://bundlephobia.com/result?p=react-stillness-component@latest) [![LICENSE](https://img.shields.io/npm/l/react-stillness-component.svg?style=flat-square)](https://github.com/leomYili/react-stillness-component/blob/main/LICENSE)[![codecov](https://codecov.io/gh/leomYili/react-stillness-component/branch/main/graph/badge.svg?token=CX32T2S9YK)](https://codecov.io/gh/leomYili/react-stillness-component)

# react stillness component

The keep-alive component of react.

supports:

React v16.8+

## Features

- Minimal syntax, only one prop can be used to complete the component state storage
- Provides both Higher-Order Components and Hooks syntax for managing stilled components
- There is no additional lifecycle, and listeners are provided to respond to the stillness action
- Does not affect react's related api, including Context, Error Boundaries, etc., and even SyntheticEvent
- Automatic lazy loading to improve overall application performance

## Usage

1. `<StillnessProvider>` provides **vue** `keep-alive`-like capabilities to your app.

    ```(jsx)
    // index.js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import { StillnessProvider } from 'react-stillness-component';
    import App from './App'

    ReactDOM.render(
      <StillnessProvider>
        <App />
      </StillnessProvider>,
      document.getElementById('root')
    )
    ```

2. Use `<Offscreen>` to wrap components that need to be prepared for quiescence, and use `useStillness` to listen for relevant stillness behavior

    ```(jsx)
    // App.js
    import React, { useState } from 'react'
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

    function App() {
      const [show, setShow] = useState(true)

      return (
        <div>
          <button onClick={() => setShow(show => !show)}>Toggle</button>
          <Offscreen visible={show}>
            <Count />
          </Offscreen>
        </div>
      );
    }

   ```

For more api and examples, please refer to the documentation

## Documentation

See the docs, tutorials and examples on the website:

-Under urgent production

## Releases

See the changelog on the Releases page:

<https://github.com/leomYili/react-stillness-component/releases>
