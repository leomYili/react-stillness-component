---
sidebar_position: 0
id: connectStillness
title: connectStillness
---

> `connectStillness` 函数将 React 组件连接到静止组件控制中心，它向连接的组件提供从控制中心中获取的数据，以及它可以用来操作静止的各项功能，它不会修改传递给它的组件，相反，它返回一个新的连接组件.

## 使用

```jsx
import { connectStillness } from 'react-stillness-component';

class Count extends Component {
  state = {
    count: 0,
  };

  render() {
    const { isStillness, stillnessId, ...rest } = this.props;
    return <div className="count">...</div>;
  }
}

const spec = {
  mounted: (props, contract) => {
    return 'mounted';
  },
  unmounted: (props, contract) => {
    return 'unmounted';
  },
};

const collect = (props, contract) => {
  return {
    isStillness: contract.isStillness(),
    stillnessId: contract.getStillnessId(),
  };
};

export const WithCount = connectStillness({ spec, collect })(Count);
```

## 参数

- `spec`: 必选， **object** ，用于描述静止组件的行为，包括：
  - `mounted`: 必选， **function** 类型，用于描述静止组件的初始化行为，参数为：
    - `props`: 必选， **object** 类型，组件的 props
    - `contract`: 必选， **object** 类型，组件的 contract,更多信息请查看 [Contract State](api/contract-state.md)
  - `unmounted`: 可选， **function** 类型，用于描述静止组件的卸载行为，参数为：
    - `props`: 必选， **object** 类型，组件的 props
    - `contract`: 必选， **object** 类型，组件的 contract,更多信息请查看 [Contract State](api/contract-state.md)
- `collect`: 必选， **function** 类型，用于描述静止组件的数据收集行为，参数为：
  - `props`: 必选， **object** 类型，组件的 props
  - `contract`: 必选， **object** 类型，组件的 contract,更多信息请查看 [Contract State](api/contract-state.md)
