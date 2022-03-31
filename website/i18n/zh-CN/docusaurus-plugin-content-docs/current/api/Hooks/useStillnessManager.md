---
sidebar_position: 0
id: useStillnessManager
title: useStillnessManager
---

> `useStillnessManager` 提供了控制静止系统的权限，返回的实例对象中包含了对全部静止状态，contract等的访问.

## 使用

```jsx
import { useStillnessManager } from 'react-stillness-component';

function Example() {
  const stillnessManager = useStillnessManager

  return <div>Example</div>
}
```

## 实例(object)

- `getStore`: 获取抽象的全局建模对象-store
- `getMonitor`: 获取内部监听器方法
- `getActions`: 获取内部全部行为
- `dispatch`: 调用 `redux` 的 **dispatch** 方法
