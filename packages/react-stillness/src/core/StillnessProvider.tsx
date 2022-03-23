/* @refresh reset */

import React, { FC, useEffect, memo, useReducer } from 'react';
import { StillnessProviderProps, StillnessManager } from '../types';
import { StillnessContext } from './StillnessContext';
import { createStillnessManager } from './createStillnessManager';

let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_STILLNESS_CONTEXT_INSTANCE__');

/**
 * stillness Components 的上下文,用于缓存所有静止实例
 * @param param0
 * @returns
 */
export const StillnessProvider: FC<StillnessProviderProps<unknown>> = memo(function ({
  children,
  ...props
}) {
  const [stillnessManager, isGlobalInstance] = getStillnessContextValue(props);

  /*
   * 保持全局的实例统一
   * 并且保持退出即销毁实例,释放内存
   */
  useEffect(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;

      context[INSTANCE_SYM] = {
        stillnessManager,
      };

      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
  }, []);

  return (
    <StillnessContext.Provider value={{ stillnessManager }}>
      {children}
    </StillnessContext.Provider>
  );
});

function getStillnessContextValue(props: StillnessProviderProps<unknown>): any {
  const manager = createStillnessManager(
    props.context,
    props.options,
    props.debugMode
  );

  const isGlobalInstance = !props.context;

  return [manager, isGlobalInstance];
}

declare const global: any;
function getGlobalContext() {
  return typeof global !== 'undefined' ? global : (window as any);
}
