---
id: contract
title: Contract
---

> `contract` means a public convention for changes to a stillness-component that will provide various information about the particular stillness-component. It responds to stillness state changes by updating the `props` of the wrapper component.

## collect

For each component that needs to listen to the stillness state, a pure function can be customized and passed to `connectStillness` or `useStillness`. The stillness-component will collect and call this function when the stillness state is modified and merge the return value into `props`.

The example is as follows:

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

or

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
