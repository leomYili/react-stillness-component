---
sidebar_position: 3
title: nextjs
---

nextjs相对特殊,文件路由系统无法通过外部修改,因此,自定义了`_app.js`,通过增加 `StillnessSwitch组件`,简单的将其下的路由组件变成了可静止的组件.

```jsx title="StillnessSwitch"
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

<iframe src="https://codesandbox.io/embed/06-example-nextjs-kwcu20?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={{width:"100%",height:"500px",border:0, borderRadius: "4px", overflow:"hidden"}}
     title="06-example-nextjs"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>