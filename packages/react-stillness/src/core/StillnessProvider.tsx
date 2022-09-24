/* @refresh reset */

import React, { FC, useEffect, memo, useReducer, useMemo } from 'react';
import { StillnessProviderProps, StillnessManager } from '../types';
import { StillnessContext } from './StillnessContext';
import {
  createStillnessManager,
  getGlobalContext,
  INSTANCE_SYM,
} from './createStillnessManager';

let refCount = 0;

/**
 * stillness Components 的上下文,用于缓存所有静止实例
 * @param param0
 * @returns
 */
export const StillnessProvider: FC<StillnessProviderProps<unknown>> = memo(
  function ({ children, ...props }) {
    const [stillnessManager, isGlobalInstance] =
      useStillnessContextValue(props);

    /*
     * 保持全局的实例统一
     * 并且保持退出即销毁实例,释放内存
     */
    useEffect(() => {
      if (isGlobalInstance) {
        const context = getGlobalContext();
        ++refCount;

        return () => {
          if (--refCount === 0) {
            context[INSTANCE_SYM] = null;
          }
        };
      }
    }, []);

    return (
      <StillnessContext.Consumer>
        {({ stillnessManager: parentStillnessManager }) => {
          if (parentStillnessManager) {
            console.warn(
              'There is already a stillnessManager, please check if there is an error, there may be unknown problems'
            );
          }

          return (
            <StillnessContext.Provider value={{ stillnessManager }}>
              {children}
            </StillnessContext.Provider>
          );
        }}
      </StillnessContext.Consumer>
    );
  }
);

function useStillnessContextValue(props: StillnessProviderProps<unknown>): any {
  return useMemo(() => {
    const manager = createStillnessManager(
      props.context,
      props.options,
      props.debugMode
    );

    const isGlobalInstance = !props.context;

    return [manager, isGlobalInstance];
  }, [props]);
}

declare const global: any;
