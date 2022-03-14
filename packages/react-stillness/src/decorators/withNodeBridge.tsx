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

import { OffscreenProps, OffscreenInnerProps } from '../components';
import { StillnessContext, StillnessNodeContext } from '../core';
import { StillnessRegistrationImpl } from '../internals';
import { isUndefined, isBoolean, useIsomorphicLayoutEffect } from '../utils';
import { Identifier, UniqueId, Registration } from '../types';

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
  DecoratedComponent: ComponentType<OffscreenInnerProps>
): ComponentType<
  React.PropsWithChildren<OffscreenProps> & { ref?: OffscreenInstance }
> {
  const Decorated: any = DecoratedComponent;

  const displayName = Decorated.displayName || Decorated.name || 'Component';
  const Connect: React.ForwardRefRenderFunction<
    OffscreenInstance,
    OffscreenProps
  > = (props: OffscreenProps, ref: React.Ref<OffscreenInstance>) => {
    const { children, ...restProps } = props;
    const { stillnessManager } = useContext(StillnessContext);
    const { stillnessParentId = '__root__' } = useContext(StillnessNodeContext);
    const [isCurrentlyMounted, setIsCurrentlyMounted] = useState(false);
    const [wrapperProps, setWrapperProps] = useState({});

    const uniqueNodeRef = useRef<Registration>(undefined);
    const isMountRef = useRef(false);

    const globalMonitor = stillnessManager.getMonitor();

    const handleChange = () => {
      const _isStillness = globalMonitor.isStillness(
        uniqueNodeRef.current.getUniqueId()
      );

      console.log('Effect,从而需要刷新组件', _isStillness);

      if (!_isStillness) {
        isMountRef.current = false;
      }

      setIsCurrentlyMounted(false);
    };

    useImperativeHandle(ref, () => {
      return {
        getUniqueId: () => uniqueNodeRef.current.getUniqueId(),
        isStillness: () => {
          return globalMonitor.isStillness(uniqueNodeRef.current.getUniqueId());
        },
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
      uniqueNodeRef.current = new StillnessRegistrationImpl(stillnessManager);

      const [uniqueId, unregister] = uniqueNodeRef.current.register({
        ...props,
        parentId: stillnessParentId,
      });

      const unsubscribe = globalMonitor.subscribeToEffectChange(handleChange, {
        uniqueId,
        type: props.type,
      });

      setWrapperProps({
        ...restProps,
        uniqueId: uniqueNodeRef.current.getUniqueId(),
        stillnessManager: stillnessManager,
      });

      if (props.visible) {
        setIsCurrentlyMounted(true);
      }

      return () => {
        unregister();
        unsubscribe();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      // 根据当前props,直接更新id以及type
      // updateNode逻辑
      if (isMountRef.current) {
        uniqueNodeRef.current.update({ ...props, parentId: stillnessParentId });

        setWrapperProps({
          ...restProps,
          uniqueId: uniqueNodeRef.current.getUniqueId(),
          stillnessManager: stillnessManager,
        });
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

    const RenderedWrappedComponent = useMemo(
      () => <Decorated {...wrapperProps}>{children}</Decorated>,
      [wrapperProps]
    );

    return isCurrentlyMounted ? RenderedWrappedComponent : null;
  };

  Connect.displayName = displayName;

  hoistNonReactStatics(Connect, DecoratedComponent);

  return React.forwardRef(Connect) as unknown as ComponentType<
    React.PropsWithChildren<OffscreenProps> & { ref?: OffscreenInstance }
  >;
}
