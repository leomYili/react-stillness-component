---
sidebar_position: 1
title: Intro
---

> This is a component that implements a feature similar to that provided in [vue](https://vuejs.org/) ([keep-alive](https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive)). The expectation is that the component will be **stillness** (not frozen, just kept live)

![React-stillness-component intro img](/img/intro.gif)

:::info

In the process of implementation, we learned a lot of good experience from the community, such as [issue #12039](https://github.com/facebook/react/issues/12039), [react-18 Offscreen](https://github.com/reactwg/react-18/discussions/19), [在 React 中实现 keep alive](https://zhuanlan.zhihu.com/p/214166951), etc., and combined with our actual business scenario, we finally implemented this component using  [React.createPortal API](https://reactjs.org/docs/portals.html) API and [redux](https://redux.js.org/).

:::

## ✨ Feature

- **Minimal syntax**, at least one prop is required
- **Updated**, provides `Higher-Order Component` and `Hooks` way to manage components
- **Low learning cost**, no additional lifecycle concepts to affect the combination of components
- **Minimal impact**, does not affect react-related api, including Context, Error Boundaries, etc., and even SyntheticEvent
- **Performance first**, automatic lazy loading to improve overall application performance

## 💡 what?

First, this component is not just to achieve the effect of caching components, but also to solve the problem of cache control

- **Portal** can do **rendering components off-screen**.
- **Redux** can help us to save the real-time cache state

:::info

The component does not provide additional lifecycle hooks to resolve child components listening for cached state. Instead, the cache state is combined with business state in a similar way to [react DnD Monitors](https://react-dnd.github.io/react-dnd/docs/overview#monitors), with custom **children props** passed down the line, also is a way to enhance the composability of components.

:::

### Data state driven

For cache control, the component provides a [Types](basic-concepts/items-types.md#Types) to identify a component or even a group of components, to specify and classify a certain type of cache component. Of course, this is not required.

In fact, unique ids are also provided inside the component to identify the component, and the two are practically identical. To get the id inside the component, see [getStillnessId()](api/contract-state.md) .

### DOM

![DOM操作](/img/real-dom.png)

This component provides a positioning element for `children`, the `[data-key="__stillness-uniqueId**__"]` node in the image above.

and the **container** element required by `Portal`, the `[data-key="offscreen-wrapper"]` node in the above image.

Each time a **stillness** element is removed or inserted, it will actually do a dom operation to show and hide the UI effect. Also each time **stillness** is started, if there is a scrollable element in `children`, its scroll position will be saved automatically (default is true)

### react API

Because of the use of `Portal`, even if the real dom element is removed or moved in, the component can still perform event bubbling and other `react` related api's accordingly and behave like a normal component.

### typescript

The component is currently developed using **typescript**, please refer to [Typescript support](get-started.md#typescript-support) for the relevant type definitions.

### Compatibility

- React v16.8+
- Preact v10+

<!-- ### 集成

- **react-router** 请参考[type](#getType)
- **umijs** 请参考[type](#getType)
- **nextjs** 请参考[type](#getType) -->
