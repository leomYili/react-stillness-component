---
sidebar_position: 0
id: stillnessProvider
title: StillnessProvider
---

> `StillnessProvider` 是整个组件静止的核心，需要把它放置在所有 `Offscreen` 组件之外.

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

- `context`: 可选，用于配置当前静止上下文，默认为 `window`
- `options`: 可选，全局配置参数，默认为 `{}`
  - `max`: 可选，静止状态的最大值，默认为 `-1`
- `debugMode`: 可选，是否开启调试模式，默认为 `false`
