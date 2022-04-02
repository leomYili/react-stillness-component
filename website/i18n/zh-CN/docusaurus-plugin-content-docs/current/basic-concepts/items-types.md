---
id: items-types
title: Items and Types
---

> 当监听静止组件各种状态时，通常离不开对于 `Items` 与 `Types` 的使用.

## Items

`Items` 是描述被静止内容的 **JavaScript 对象**.当开始静止组件时，你可以创建一个类似 `{type:"mounted"，data:{...}}` 的对象.这个对象之后会传递给组件的 `props` 以便使用.

```jsx
...
const spec = {
  mounted: (props， contract) => {
    return {
      type: 'mounted'，
      data: {
        ...
      }
    };
  }，
  unmounted: (props， contract) => {
    return {
      type: 'unmounted'，
      data: {
        ...
      }
    };
  }，
  collect: (props, contract) => {
    return {
      isStillness: contract.isStillness(),
      stillnessId: contract.getStillnessId(),
    };
  },
};

connectStillness(spec) or useStillness(spec);
...
```

:::info 提示

`Items` 并不是必须返回的，你可以根据自己的需求选择返回任何内容

:::

## Types

`Type` 是一个 `string` 类型的值，用于标识应用中同一类别的静止组件.在应用中通常表现为 `type="card"` ，`Type` 不是必须的，当你有外部控制静止组件需求时，可以通过 `props` 传递 `type` 值.

```jsx
<Offscreen visible={visible} type="card">
  <Count></Count>
</Offscreen>
```

:::info 提示

静止组件默认父组件状态影响子组件，当父子组件所依赖的 `visible` 一致时，不需要额外给父子组件传递 `type` 值.

:::