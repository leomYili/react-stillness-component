---
sidebar_position: 0
id: stillnessProvider
title: StillnessProvider
---

> The `StillnessProvider` is the core of the stillness component and needs to be placed outside of all `<Offscreen>` components.

## 使用

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { StillnessProvider } from 'react-stillness-component';
import App from './App';

ReactDOM.render(
  <StillnessProvider>
    <App />
  </StillnessProvider>，
  document.getElementById('root')
);
```

## Props

- `context`: optional, used to configure the current static context, defaults to `window`
- `options`: optional, global configuration parameter, default is `{}`
  - `max`: optional, the maximum value of the quiescent state, defaults to `-1`
- `debugMode`: optional, whether to enable debug mode, default is `false`