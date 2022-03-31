---
id: contract
title: Contract
---

> `contract` 意味着静止组件产生变化时的对外公开约定，它将提供特定静止组件的各种信息.它通过更新包装组件的 `props` 来响应静止状态更改.

## collect

对于每个需要监听静止状态的组件，可以自定义一个纯函数，并传递给 `connectStillness` 或 `useStillness`，静止组件将收集并在静止状态被修改时调用这个函数，并将返回值合并到 `props` 中.

示例如下:

```jsx title="Hoc"
// highlight-start
const collect = (props， contract) => {
  return {
    isStillness: contract.isStillness()，
    stillnessId: contract.getStillnessId()，
  };
};
// highlight-end

connectStillness({ collect });
```

或者

```jsx title="Hooks"
const spec = (props) => {
  return {
    // highlight-start
    collect: (contract) => ({
      isStillness: contract.isStillness()，
      stillnessId: contract.getStillnessId()，
    })
    // highlight-end
  }
}

function Count(props) {
  const collected = useStillness(spec(props));
  ...
}
```
