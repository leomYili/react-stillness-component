import React from 'react';
import { __RouterContext as RouterContext } from '@umijs/runtime';

export default function Route(props: any) {
  return (
    <RouterContext.Consumer>
      {(context: any) => {
        const { location } = context;
        const match = props.computedMatch;
        const newProps = { ...context, location, match };
        let { render, stillness } = props;
        
        return (
          <RouterContext.Provider value={newProps}>
            {newProps.match || stillness
              ? render({
                  ...props.layoutProps,
                  ...newProps,
                })
              : null}
          </RouterContext.Provider>
        );
      }}
    </RouterContext.Consumer>
  );
}
