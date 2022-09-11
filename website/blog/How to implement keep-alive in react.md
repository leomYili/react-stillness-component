---
title: How to implement keep-alive in react
description: This is my first blog post about front-end automation testing.
date: 2022-08-13T17:00
slug: realization react-stillness-component
authors: leomYili
tags: [keep-alive, react-stillness-component]
hide_table_of_contents: false
---

> Project-related address: [react-stillness-component](https://leomyili.github.io/react-stillness-component/), the test rate has reached 90%, welcome to try it!
>
> Official history related discussion: [address](https://github.com/facebook/react/issues/12039)
>
> Latest react18 official solution discussion: [address](https://github.com/reactwg/react-18/discussions/19)

This article describes in detail how to conceive and implement a component with a global state cache `react-stillness-component`.

## I. Preface - Analysis of existing similar components

The normal scenario where authors need to write additional generic components is when they encounter special problems, and existing components are not implemented or would be very costly to develop new components.

In the case of component caching, a good choice for the community would be [React Activation](https://github.com/CJY0208/react-activation/blob/master/README_CN.md), which renders the component in an external hidden component Hierarchy, and then move the component into the corresponding container of the corresponding component through ``DOM`` operations when the component is actually rendered, so that the caching of the component can be controlled by the following syntax:

```jsx
import KeepAlive from 'react-activation'

// The components in keepAlive are actually rendered in advance to the external Keeper
// Then when keepAlive starts rendering, the corresponding dom nodes are moved here using the data stored in Keeper
...

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(show => !show)}>Toggle</button>
      {show && (
        <KeepAlive>
          <Counter />
        </KeepAlive>
      )}
    </div>
  )
}

...

```

In the react18 before has been considered a relatively good method, but for our scenario there are still several problems:

1. the old project code is very large, the implementation of the above method will bring the impact on the dependence on the life cycle order of the function, such as the ref value, although you can setTimeout to delay the acquisition, but one is a slightly large cost, another need to change the previous writing method, the project everywhere in the setTimeout will also affect the reading of the code and code review
2. context is actually the same, but compared to the above situation is much better, just need to switch to `react-activation` to provide the createContext that can be
3. synthetic event bubbling will fail, which is the fundamental reason for not using the above solution, the author's team will have a multi-dimensional table and other complex components, for drag and drop hover positioning will have certain requirements, caching compared to the experience can only be considered an optimization, can not affect the main function.
4. In manual caching you need to add `name` to each `<KeepAlive>` component, which also adds some cost.

If it is for new projects, the library can actually reach the production environment level.

## II. The ideal effect

Here the ideal effect is the author's ultimate goal.

First of all, the effect of `keepalive` can only be considered icing on the cake, it can not affect the development of other features in the project, so similar context, event bubbles, animations and so on can not be affected. 2.
2. at the same time, the cost of getting started can not be too high, api to be simple enough, similar to manually increase the unique identity and management of the way the cost is a little high, it is best not to declare the unique identity, but also to manually uninstall.
3. performance first, lazy loading, true removal of DOM nodes. 4.
4. need to remember the component-level scrolling effect.
5. solve the inconsistent caching effect in nested components, if only use a state to control whether to cache, the nested `keep-alive` components will not be able to real-time update.
6. unified data communication mechanism and local updates

Therefore, in response to the above objectives, the authors finally chose [`Portals'](https://zh-hans.reactjs.org/docs/portals.html) and redux (to manage the cache state) to solve these problems

## III. Implementation principle

Let's start with a pseudo-code

```jsx
import { Offscreen,useStillness } from 'react-stillness-component';

...
function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(show => !show)}>Toggle</button>
      <Offscreen visible={show}>
        <Count />
      </Offscreen>
    </div>
  );
}

...
function Count() {
  const collected = useStillness({
    collect: (contract) => ({
      stillnessId: contract.getStillnessId(),
      unset: contract.unset,
      clear: contract.clear,
    }),
  });

  return (
    <div>
      ....
    </div>
  );
}
...
```

Compared to the current community's ability to utilize `didMount`, `unMount`, this is simplified to a prop, with associated hooks to support manual control of the cache.

The core is:

```jsx
<Offscreen visible={show}>
  <Count />
</Offscreen>
```

will not have a very familiar feeling, if the `Offscreen` replaced by `div`, `visible` replaced by `visibility:visible|hidden`, then it is just a piece of explicit logic to complete the actual effect of the cache 😬

Of course it's not that simple, otherwise there would be no need to develop a separate component, but this is really the way the author wanted the component to be used.

! [example of the principle](. /assets/1.png)

Convert to code:

```jsx
...

targetElement = document.createElement('div');

// didMount
containerRef.current.insertAdjacentElement(
  'afterend',
  targetElement
);

ReactDOM.createPortal(props.children, targetElement)

...
```

Then it's time for the core extensions, which need to address the consistency of the behavior of the nested `<keepAlive>` related components and the overall cache control.

## IV. Functional design

For performance reasons, the redux stores only the data mapping of the cache nodes, and after each cache node is loaded, a corresponding data node will be created synchronously. relationship with other nodes.

! [context application](. /assets/3.png)

Each layer just needs to get the id of the nearest `StillnessNodeContext` to build a mapping of nested component relationships,

So the focus of the work is as follows:

- Cache node data state design
- state synchronization between nodes
- Performance optimization, lazy loading

### 1. state data structure design

! [state design](. /assets/2.png)

Here the vNode is represented as :

```js
interface vNodeState {
  uniqueId: UniqueId; // 唯一标识
  type?: UniqueId; // 类型
  parentId: UniqueId; // 父节点标识
  visible?: boolean; // props中的显隐属性
  isStillness?: boolean; // 计算之后真实的静止状态
}
```

operation may not be easy to understand, but it is mainly used to mark some behavior that may affect the nodes in the global world, such as:

- unset: reset the history of the static node
- clear: reset the history of all static nodes
- mount: A node has triggered a quiescent state
- unmount: A node is released from the quiescent state

When any of the above events is triggered, it is necessary to generate dependencies on the starting node, and sometimes even to update all cache nodes.

max provides a way to control the cache automatically, when the user declares the maximum number of cache nodes, the component will automatically clear or add to the cache according to the rules (the first level `<Offscreen>` node will be counted as a node, and all its children will follow the parent node) and using the `lru` algorithm.

### 2. State synchronization

Synchronization here means that when a parent node triggers a quiescent operation, it needs to notify all its children in real time. Thanks to the design of the data structure, when a node triggers a quiescent or unquiescent operation, all nodes that need to change their state can be calculated based on `uniqueId` and `parentId`.

! [state synchronization](. /assets/4.png)

### 3. Performance optimization

Performance optimizations are mainly in two areas

- Local updates: using redux, and the design of the state data structure, each node state update only affects the associated nodes
- Lazy loading: In fact, the `visible` attribute on the `<Offscreen>` node can be optimized, if the `visible` attribute is `false` at the beginning, the `children` will not need to be loaded directly

```jsx
useIsomorphicLayoutEffect(() => {
  if (isMountRef.current) {
    const parentIsStillness = globalMonitor.isStillness(stillnessParentId);
    uniqueNodeRegistration.update({
      ...props,
      parentId: stillnessParentId,
      isStillness: parentIsStillness || !props.visible,
    });

    // 获取到真实静止状态
    const thisIsStillness = globalMonitor.isStillness(
      uniqueNodeRegistration.getUniqueId()
    );

    ...

    if (!thisIsStillness) {
      setIsCurrentlyMounted(true);
    }
  }
}, [props, stillnessParentId]);

useEffect(() => {
  if (isCurrentlyMounted === false) {
    if (isMountRef.current) {
      setIsCurrentlyMounted(true);
    } else {
      isMountRef.current = true;
    }
  }
}, [isCurrentlyMounted]);

const RenderedWrappedComponent = useMemo(
  () => <Decorated {...wrapperProps} />,
  [wrapperProps]
);

return isCurrentlyMounted ? RenderedWrappedComponent : null;
```

Just note here that it is possible that the parent node is already static, so the child node needs to be lazy loaded even though `visible` is `true`.

### 4. Scrolling state memory

Because the node will reset its scrolling position after DOM operation, we need to record the scrolling state of the first level dom node under `<Offscreen>`, and then set the value to restore it when it is lifted from the resting state

```jsx
listenerTargetElementChildScroll = () => {
  if (this.props?.scrollReset) {
    this.targetElement.addEventListener(
      'scroll',
      throttle(
        (e: any) => {
          if (isRealChildNode(this.targetElement, e.target)) {
            let index = this.cacheNodes.findIndex((el) => {
              return el.node === e.target;
            });

            if (index !== -1) {
              this.cacheNodes[index] = {
                node: e.target,
                left: e.target.scrollLeft || 0,
                top: e.target.scrollTop || 0,
              };
            } else {
              this.cacheNodes.push({
                node: e.target,
                left: e.target.scrollLeft || 0,
                top: e.target.scrollTop || 0,
              });
            }
          }
        },
        this,
        120
      ),
      true
    );
  }
};
```

Because of the parent-child nested components involved here, the author uses an event listener approach where the scrolling elements under each `<Offscreen>` node are remembered and stored in the scope of that node when a scrolling event is generated under it.

### 5. HOC

After solving the most important problem, the next step is to provide a variety of shortcut usage, the component supports the use of `HOC` and `Hooks`,

`HOC` just need to provide a `spec` can:

```jsx
import { connectStillness } from 'react-stillness-component';

...

const spec = {
  mounted: (props, contract) => {
    return 'mounted';
  },
  unmounted: (props, contract) => {
    return 'unmounted';
  },
  collect: (props, contract) => {
    return {
      isStillness: contract.isStillness(),
      stillnessId: contract.getStillnessId(),
    };
  }
};

export const WithCount = connectStillness(spec)(CountComponent);
...
```

`spec` 参数[可以参考](https://leomyili.github.io/react-stillness-component/zh-CN/docs/api/Decorators/connectStillness)

`spec`中`collect`函数返回的值就是组件新的`props`;

### 6. Hook

`Hooks`方面主要有两个`hook`来帮助用户更好的完成缓存节点的控制

- useStillnessManager:偏底层一些,将内部的方法也做了一定的归纳,并提供给用户进行自定义
- useStillness:与`connectStillness`效果一致

```jsx
import { useStillness, useStillnessManager } from 'react-stillness-component';

function Count(props) {
  const stillnessManager = useStillnessManager();
  // stillnessManager.getStore();

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

The above is the overall architecture design. If you are interested, you can take a look at the source code, the structure is based on the idea of `react-dnd`, and you can also re-read how it is designed to separate the data state from the UI.

After that, we will show you the practical application of `react-stillness-component`.

## V. Practical Exercises

The following examples are only written by the author according to his own situation, in fact, the component itself is very simple, there is no obvious compatibility issues, if there is a combination of other libraries can not achieve the effect, you are welcome to contact the author.

### 1. first is a simple demo

! [simple example](. /assets/5.gif)

You can see the exact effect through [online demo](https://codesandbox.io/s/02-example-react-379q3k?from-embed).

### 2. Then comes the most common `react-router`, which is divided into v5 and v6 versions

! [react-router v5](. /assets/6.gif)

The main thing in `react-router-v5` is the customization of the `<Switch>` component, which achieves the effect of route caching, for more details, [you can refer to](https://leomyili.github.io/react-stillness-component/zh-CN/ docs/examples/react-router/v5), and debug it yourself

! [react-router v6](. /assets/7.gif)

`react-router-v6` version is much simpler, just need to customize the outlet, you can achieve the effect of caching, the source code [can refer to](https://codesandbox.io/s/04-example-react-routerv6-uuv2xc?from-embed), and debug yourself

### 3. then is the application in the `umi v3` framework, which is also the author's current team's basic framework

First you need to install the wrapped plugin `yarn add umi-plugin-stillness react-stillness-component`;

Next, use it in `.umirc.ts`:

```js
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          exact: false,
          path: '/home',
          component: '@/pages/home',
          stillness: true,
          routes: [
            {
              path: '/home/a',
              component: '@/pages/a',
              stillness: true,
            },
          ],
        },
        { path: '/about', component: '@/pages/about', stillness: true },
        { path: '/list', component: '@/pages/list' },
      ],
    },
  ],
  stillness: {},
});
```

Add `stillness:true` to the nodes that need to be cached

Effect:

! [umi demo](. /assets/8.gif)

The most important thing is to customize the `<Switch>` component, use the `modifyRendererPath` capability, redefine the new `renderer`, and then use the `react-route-v5` similar modification method, you can achieve the effect. The downside is that it needs to be synchronized and updated in time, for example, the new `react18` related capabilities, the author has not yet updated up.

[Online address](https://codesandbox.io/s/05-example-umi-v3-plugin-puubqt?from-embed=&file=/src/pages/list.tsx), you can debug it yourself

### 4. and the author's own more interested in `next.js` framework

nextjs is relatively special, the file routing system can not be modified externally, therefore, customize the _app.js, by adding StillnessSwitch component, simply turn the routing components under it into stationary components.

```jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Offscreen } from 'react-stillness-component';

function matchPath(pathname, routes) {
  const result = routes.find(({ path }) => path === pathname) || null;

  return result;
}

const StillnessSwitch = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [stillnessRoutes, setStillnessRoutes] = useState([]);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (pageProps.stillness) {
      !matchPath(router.pathname, stillnessRoutes) &&
        setStillnessRoutes([
          ...stillnessRoutes,
          { Page: Component, _props: pageProps, path: router.pathname },
        ]);
      setRoute([]);
    } else {
      setRoute([
        {
          Page: Component,
          _props: pageProps,
          path: router.pathname,
        },
      ]);
    }
  }, [Component, router.pathname]);

  return (
    <>
      {stillnessRoutes.concat(route).map(({ Page, _props, path }) => {
        if (_props.stillness) {
          return (
            <Offscreen
              key={path}
              type={path}
              visible={path === router.pathname}
            >
              <Page {..._props} />
            </Offscreen>
          );
        }

        return <Page {..._props} />;
      })}
    </>
  );
};

export default StillnessSwitch;
```

! [nextjs demo](. /assets/9.gif)

[online address](https://codesandbox.io/s/06-example-nextjs-kwcu20?from-embed=&file=/pages/index.js), you can debug it yourself

## Summary

This article describes in detail how to achieve the effect of `keep-alive` in react, and describes in detail the specific ideas, the author actually wanted to introduce the automation testing of components, but later in the actual scenario encountered this demand, then simply the first component to achieve, and then use the actual components to complete the front-end testing. This is "front-end how to do component testing" of the opening, if there are any questions, welcome to discuss together.