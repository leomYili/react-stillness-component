import React, {
  Component,
  ComponentType,
  useMemo,
  useState,
  useContext,
  useRef,
  useImperativeHandle,
} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';

import { OffscreenProps } from '../components';
import { StillnessContext, StillnessNodeContext } from '../core';
import { register } from '../internals';
import {
  isUndefined,
  shallowEqual,
  getNextUniqueId,
  useIsomorphicLayoutEffect,
} from '../utils';
import {
  StillnessContextType,
  StillnessManager,
  Identifier,
  UniqueId,
} from '../types';

export interface OffscreenInstance {
  getUniqueId: () => UniqueId;
  isStillness: () => boolean;
  unset: ({ id: UniqueId, type: Identifier }) => void;
  clear: () => void;
}

/**
 * 2022.0309 新增监听逻辑,当store.operation中type为unset时,则卸载相应节点即可完成之后的所有操作
 * @param DecoratedComponent
 * @returns
 */
export function withNodeBridge(
  DecoratedComponent: ComponentType<OffscreenProps>
): ComponentType<
  React.PropsWithChildren<OffscreenProps> & { ref?: OffscreenInstance }
> {
  const Decorated: any = DecoratedComponent;

  const displayName = Decorated.displayName || Decorated.name || 'Component';
  const Connect: React.ForwardRefRenderFunction<
    OffscreenInstance,
    OffscreenProps
  > = (props: OffscreenProps, ref: React.Ref<OffscreenInstance>) => {
    const { stillnessManager } = useContext(StillnessContext);
    const { stillnessParentId = '__root__' } = useContext(StillnessNodeContext);
    const [isCurrentlyMounted, setIsCurrentlyMounted] = useState(false);
    const isMountRef = useRef(false);

    const handleChange = () => {
      setIsCurrentlyMounted(false);
    };

    useImperativeHandle(ref, () => {
      return {
        getUniqueId: () => stillnessParentId,
        isStillness: () => true,
        unset: ({ id, type }) => {
          //stillnessManager.unset({ id, type });
        },
        clear: () => {
          //stillnessManager.clear();
        },
      };
    });

    useIsomorphicLayoutEffect(() => {
      // 创建对应节点
      // subscribeToEffectChange(handleChange)用来监听组件操作行为变化
      const [uniqueId, unsubscribe] = register(
        { ...(props as any), parentId: stillnessParentId },
        stillnessManager
      );

      if (props.visible) {
        // 初始化逻辑
        setIsCurrentlyMounted(true);
      }

      return () => {
        // 删除对应节点
        // unsubscribe
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      // 根据当前props,直接更新id以及groupId
      // updateNode逻辑
      if (isMountRef.current) {
        console.log('update', props);
      }
    }, [props, stillnessParentId]);

    useIsomorphicLayoutEffect(() => {
      if (isCurrentlyMounted === false) {
        if (isMountRef.current) {
          setIsCurrentlyMounted(true);
        } else {
          isMountRef.current = true;
        }
      }
    }, [isCurrentlyMounted]);

    const RenderedWrappedComponent = React.memo((props) => (
      <Decorated {...props} stillnessManager={stillnessManager} />
    ));

    return isCurrentlyMounted ? <RenderedWrappedComponent {...props} /> : null;
  };

  Connect.displayName = displayName;

  hoistNonReactStatics(Connect, DecoratedComponent);

  return React.forwardRef(Connect) as unknown as ComponentType<
    React.PropsWithChildren<OffscreenProps> & { ref?: OffscreenInstance }
  >;
}
