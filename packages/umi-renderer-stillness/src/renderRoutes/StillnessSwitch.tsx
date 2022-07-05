import React, { isValidElement, Children, cloneElement } from 'react';
import { __RouterContext as RouterContext, matchPath } from '@umijs/runtime';
import { Offscreen } from 'react-stillness-component';

export default function Switch(props: any) {
  return (
    <RouterContext.Consumer>
      {(context: any) => {
        const { children, ...extraProps } = props;
        const { match } = context;

        const location = props.location || context.location;
        let element: any,
          isExist: boolean = false;

        return Children.map(
          children,
          (child: {
            props: { path: string; from: string; stillness: boolean };
          }) => {
            if (isValidElement(child)) {
              const path = child.props.path || child.props.from;
              element = child;

              const childMatch = isExist
                ? null
                : path
                ? matchPath(location.pathname, { ...child.props, path })
                : match;

              if (childMatch !== null) {
                isExist = true;
              }

              if (child.props.stillness) {
                return (
                  <Offscreen type={path} visible={childMatch !== null}>
                    {cloneElement(element, {
                      location,
                      computedMatch: childMatch,
                      layoutProps: extraProps,
                    })}
                  </Offscreen>
                );
              } else {
                return cloneElement(element, {
                  location,
                  computedMatch: childMatch,
                  layoutProps: extraProps,
                });
              }
            }
          }
        );
      }}
    </RouterContext.Consumer>
  );
}
