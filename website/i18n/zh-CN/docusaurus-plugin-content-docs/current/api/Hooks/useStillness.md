---
sidebar_position: 1
id: useStillness
title: useStillness
---

> `useStillness` 将 React 组件连接到静止组件控制中心，它向连接的组件提供从控制中心中获取的数据，以及它可以用来操作静止的各项功能，你可以声明想要的属性与方法

## 使用

```jsx
import { useStillness } from 'react-stillness-component';

function Count(props) {
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
        item: contract.getStillnessItem(),
      };
    },
  });

  useEffect(() => {
    console.log(collected);
  }, [collected]);

  return <div>...</div>;
}
```

## 参数

- `mounted`: 可选 **function** 类型，用于描述静止组件的初始化行为，参数为：
  - `props`: 必选， **object** 类型，组件的 props
  - `contract`: 必选， **object** 类型，组件的 contract,更多信息请查看 [Contract State](api/contract-state.md)
- `unmounted`: 可选， **function** 类型，用于描述静止组件的卸载行为，参数为：
  - `props`: 必选， **object** 类型，组件的 props
  - `contract`: 必选， **object** 类型，组件的 contract,更多信息请查看 [Contract State](api/contract-state.md)
- `collect`: 可选， **function** 类型，用于描述静止组件的数据收集行为，参数为：
  - `props`: 必选， **object** 类型，组件的 props
  - `contract`: 必选， **object** 类型，组件的 contract,更多信息请查看 [Contract State](api/contract-state.md)
