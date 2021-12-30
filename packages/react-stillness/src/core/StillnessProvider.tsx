import React, { FC, useEffect, memo } from 'react';
import { StillnessProviderProps } from '../types';
import { StillnessContext } from './StillnessContext';
import { createStillnessManager } from './createStillnessManager';

let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_STILLNESS_CONTEXT_INSTANCE__');

/**
 * stillness Component 的上下文,用于缓存所有静止实例
 * @param param0
 * @returns
 */
export const StillnessProvider: FC<StillnessProviderProps<unknown>> = memo(
  function ({ children, ...props }) {
    const [stillnessManager, isGlobalInstance] =
      getStillnessContextValue(props);

    /**
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
      <StillnessContext.Provider value={stillnessManager}>
        {children}
      </StillnessContext.Provider>
    );
  }
);

function getStillnessContextValue(props: StillnessProviderProps<unknown>) {
  const manager = createSingletonDndContext(props.context, props.options);

  return [manager, true];
}

function createSingletonDndContext<Context, Options>(
  context: Context = getGlobalContext(),
  options: Options
) {
  const ctx = context as any;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      stillnessManager: createStillnessManager(context, options),
    };
  }
  return ctx[INSTANCE_SYM];
}

declare const global: any;
function getGlobalContext() {
  return typeof global !== 'undefined' ? global : (window as any);
}