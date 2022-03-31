---
sidebar_position: 0
id: useStillnessManager
title: useStillnessManager
---

> `useStillnessManager` provides access to control the stillness system, and the returned instance object contains access to all stillness states, contracts, etc.

## usage

```jsx
import { useStillnessManager } from 'react-stillness-component';

function Example() {
  const stillnessManager = useStillnessManager

  return <div>Example</div>
}
```

## Instance(object)

- `getStore`: Get the abstract global modeling object-store
- `getMonitor`: Get the internal listener methods
- `getActions`: Get all internal behaviors
- `dispatch`: call the **dispatch** method of `redux`
