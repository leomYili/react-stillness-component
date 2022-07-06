import React, {
  Component,
  ComponentType,
  useMemo,
  useState,
  useContext,
  useRef,
  useImperativeHandle,
  FC,
} from 'react';
import invariant from 'invariant';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { OffscreenProps, OffscreenInnerProps } from '../components';
import { StillnessNodeContext } from '../core';
import { useStillnessManager, useIsomorphicLayoutEffect } from '../hooks';
import { StillnessRegistrationImpl, StillnessContractImpl } from '../internals';
import { isUndefined, isBoolean } from '../utils';
import { Identifier, UniqueId, Registration, UnsetParams } from '../types';
import { rootId } from '../constants';

export interface OffscreenInstance {
  getStillnessId: () => UniqueId;
  isStillness: () => boolean;
  unset: (params: UnsetParams) => void;
  clear: () => void;
}

/**
 * 2022.0309 新增监听逻辑,当store.operation中type为unset时,则卸载相应节点即可完成之后的所有操作
 * @param DecoratedComponent
 * @returns
 */
export function withNodeBridge(
  DecoratedComponent: ComponentType<OffscreenInnerProps>
): FC<React.PropsWithChildren<OffscreenProps> & { ref?: OffscreenInstance }> {
  const Decorated: any = DecoratedComponent;

  const displayName = Decorated.displayName || Decorated.name || 'Component';
  const Connect: React.ForwardRefRenderFunction<
    OffscreenInstance,
    OffscreenProps
  > = (props: OffscreenProps, ref: React.Ref<OffscreenInstance>) => {
    const stillnessManager = useStillnessManager();
    const { stillnessParentId = rootId } = useContext(StillnessNodeContext);
    const [isCurrentlyMounted, setIsCurrentlyMounted] = useState(false);
    const [wrapperProps, setWrapperProps] = useState({});

    const isMountRef = useRef(false);
    const uniqueNodeRegistration = useMemo(() => {
      return new StillnessRegistrationImpl(stillnessManager);
    }, []);

    const handleContract = new StillnessContractImpl(stillnessManager);

    const globalMonitor = stillnessManager.getMonitor();

    const handleChange = () => {
      setIsCurrentlyMounted(false);
    };

    useImperativeHandle(ref, () => {
      return {
        getStillnessId: () => {
          return uniqueNodeRegistration.getUniqueId();
        },
        isStillness: () => {
          return globalMonitor.isStillness(
            uniqueNodeRegistration.getUniqueId()
          );
        },
        unset: (params: UnsetParams) => {
          handleContract.unset({ ...params });
        },
        clear: () => {
          handleContract.clear();
        },
      };
    });

    useIsomorphicLayoutEffect(() => {
      const [uniqueId, unregister] = uniqueNodeRegistration.register({
        ...props,
        parentId: stillnessParentId,
        isStillness: globalMonitor.isStillness(stillnessParentId),
      });

      const unEffectSubscribe = globalMonitor.subscribeToEffectChange(
        handleChange,
        {
          uniqueId,
          type: props.type,
        }
      );
      const parentIsStillness = globalMonitor.isStillness(stillnessParentId);
      const thisIsStillness = globalMonitor.isStillness(uniqueId);
      setWrapperProps({
        ...props,
        uniqueId,
        parentIsStillness,
        stillnessManager: stillnessManager,
        isStillness: thisIsStillness,
      });

      if (!thisIsStillness) {
        setIsCurrentlyMounted(true);
      }

      return () => {
        unregister();
        unEffectSubscribe();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      if (isMountRef.current) {
        const parentIsStillness = globalMonitor.isStillness(stillnessParentId);
        uniqueNodeRegistration.update({
          ...props,
          parentId: stillnessParentId,
          isStillness: parentIsStillness || !props.visible,
        });
        
        const thisIsStillness = globalMonitor.isStillness(
          uniqueNodeRegistration.getUniqueId()
        );
        setWrapperProps({
          ...props,
          parentIsStillness,
          isStillness: thisIsStillness,
          uniqueId: uniqueNodeRegistration.getUniqueId(),
          stillnessManager: stillnessManager,
        });

        if (!thisIsStillness) {
          setIsCurrentlyMounted(true);
        }
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
      () => <Decorated {...wrapperProps} />,
      [wrapperProps]
    );

    return isCurrentlyMounted ? RenderedWrappedComponent : null;
  };

  Connect.displayName = displayName;

  hoistNonReactStatics(Connect, DecoratedComponent);

  return React.forwardRef(Connect) as unknown as FC<
    React.PropsWithChildren<OffscreenProps> & { ref?: OffscreenInstance }
  >;
}
