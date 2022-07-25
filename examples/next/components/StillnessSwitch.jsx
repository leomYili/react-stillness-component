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
