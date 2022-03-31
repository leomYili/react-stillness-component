---
id: items-types
title: Items and Types
---

> The use of `Items` and `Types` is often necessary when listening to the various states of a stillness-component.

## Items

`Items` are **JavaScript objects** that describe the content being staged. When starting a stillness-component, you can create an object like `{type: "counted", data:{...}}` object. This object is then passed to the component's `props` for use.

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
};

connectStillness({ spec，... }) or useStillness(spec);
...
```

:::info Info

`Items` are not required to be returned, you can choose to return anything you want

:::

## Types

`Type` is a `string` that identifies a stillness-component of the same class in the application. Typically represented as `type="card"` in applications, `Type` is not required and can be passed via `props` when you have external control over stillness-components.

```jsx
<Offscreen visible={visible} type="card">
  <Count></Count>
</Offscreen>
```

:::info Info

Static components affect their children by default. There is no need to pass additional `type` values to the parent and child components when the `visible` on which they depend is the same.

:::