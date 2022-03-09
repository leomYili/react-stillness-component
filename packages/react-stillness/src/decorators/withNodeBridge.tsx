import React, {
  Component,
  ComponentType,
  useMemo,
  useState,
  useContext,
  useRef,
} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';

import { OffscreenProps } from '../components';
import { StillnessContext, StillnessNodeContext } from '../core';
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

interface DecoratedComponentState {
  uniqueId: UniqueId;
  uniqueGroupId: UniqueId;
  isCurrentlyMounted: boolean;
}

/**
 * 2022.0309 新增监听逻辑,当store.operation中type为unset时,则卸载相应节点即可完成之后的所有操作
 * @param DecoratedComponent
 * @returns
 */
export function withNodeBridge(
  DecoratedComponent: ComponentType<OffscreenProps>
): ComponentType<OffscreenProps> {
  const Decorated: any = DecoratedComponent;

  const displayName = Decorated.displayName || Decorated.name || 'Component';

  const getStillnessUniqueId = (id, originalId, prefix) => {
    return id
      ? id
      : originalId || `__stillness${prefix}-${getNextUniqueId()}__`;
  };
  function Connect(props: OffscreenProps) {
    const { stillnessManager } = useContext(StillnessContext);
    const { stillnessParentId = '__root__' } = useContext(StillnessNodeContext);
    const [isCurrentlyMounted, setIsCurrentlyMounted] = useState(false);
    const isMounted = useRef(false);
    const renderIsScheduled = useRef(false);

    const actualProps = useMemo(() => {
      const uniqueId = getStillnessUniqueId(props.id, undefined, 'node');
      const uniqueGroupId = getStillnessUniqueId(
        props.groupId,
        undefined,
        'group'
      );

      return { id: uniqueId, groupId: uniqueGroupId, ...props };
    }, [props]);

    useIsomorphicLayoutEffect(() => {
      // 创建对应节点
      // subscribeToEffectChange(handleChange)用来监听组件操作行为变化

      setIsCurrentlyMounted(true);

      return () => {
        // 删除对应节点
        // unsubscribe
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      // 根据当前props,直接更新id以及groupId
      // updateNode逻辑
      console.log('actualProps', actualProps);
      if (!renderIsScheduled.current && actualProps.visible) {
        // 初始化逻辑
        renderIsScheduled.current = actualProps.visible;
      }
    }, [actualProps, stillnessParentId]);

    useIsomorphicLayoutEffect(() => {
      if (isCurrentlyMounted === false) {
        if (isMounted.current) {
          setIsCurrentlyMounted(true);
        } else {
          isMounted.current = true;
        }
      }
    }, [isCurrentlyMounted]);

    const handleChange = () => {
      setIsCurrentlyMounted(false);
    };

    const renderedWrappedComponent = useMemo(
      () => <Decorated {...actualProps} stillnessManager={stillnessManager} />,
      [Decorated, actualProps]
    );

    return isCurrentlyMounted && renderIsScheduled.current
      ? renderedWrappedComponent
      : null;
  }

  Connect.DecoratedComponent = DecoratedComponent;
  Connect.displayName = displayName;

  return hoistNonReactStatics(
    Connect,
    DecoratedComponent
  ) as any as ComponentType<OffscreenProps>;

  /* class WrapperComponent extends Component<
    OffscreenProps,
    DecoratedComponentState
  > {
    public static displayName = 'WithNodeBridge';
    public static DecoratedComponent = DecoratedComponent;
    public static contextType?: React.Context<StillnessContextType> =
      StillnessContext;

    private stillnessManager: StillnessManager | undefined;

    constructor(props: OffscreenProps) {
      super(props);

      this.state = {
        uniqueId: this.getStillnessUniqueId(props.id, undefined, 'node'),
        uniqueGroupId: this.getStillnessUniqueId(
          props.groupId,
          undefined,
          'group'
        ),
        isCurrentlyMounted: false,
      };
    }

    private receiveManager = (stillnessManager: StillnessManager) => {
      if (!isUndefined(this.stillnessManager)) {
        return;
      }

      this.stillnessManager = stillnessManager;
      invariant(
        typeof stillnessManager === 'object',
        'Could not find the stillness-components manager in the context of %s. ' +
          'Make sure to render a Stillness.Provider component in your top-level component. ' +
          displayName,
        displayName
      );
    };

    private getStillnessUniqueId = (id, originalId, prefix) => {
      return id
        ? id
        : originalId || `__stillness${prefix}-${getNextUniqueId()}__`;
    };

    public componentDidUpdate(prevProps: OffscreenProps) {
      const { children, ...next } = this.props;
      const { children: prevChildren, ...prev } = prevProps;

      if (!shallowEqual(next, prev)) {
        const oldId = this.state.uniqueId;
        this.setState(
          {
            uniqueId: this.getStillnessUniqueId(
              this.props.id,
              this.state.uniqueId,
              'node'
            ),
            uniqueGroupId: this.getStillnessUniqueId(
              this.props.groupId,
              this.state.uniqueGroupId,
              'group'
            ),
          },
          () => {
            /* this.stillnessManager.getActions().updateStillnessVNode({
              oldId,
              id: this.state.uniqueId,
              groupId: this.state.uniqueGroupId,
              visible: this.props.visible,
            }); 
          }
        );
      }
    }

    public render() {
      return (
        <StillnessNodeContext.Consumer>
          {({ stillnessParentId }) => {
            if (isUndefined(this.context.stillnessManager)) {
              return null;
            }

            this.stillnessParentId = stillnessParentId ?? `__root__`;
            this.receiveManager(this.context.stillnessManager);

            if (!this.state.isCurrentlyMounted) return null;

            return (
              <DecoratedComponent
                {...this.props}
                id={this.state.uniqueId}
                groupId={this.state.uniqueGroupId}
                stillnessManager={this.context.stillnessManager}
              />
            );
          }}
        </StillnessNodeContext.Consumer>
      );
    }

    public componentDidMount() {
      /* this.stillnessManager.getActions().createStillnessVNode({
        id: this.state.uniqueId,
        groupId: this.state.uniqueGroupId,
        parentId: this.stillnessParentId,
        visible: this.props.visible,
      });
      this.setState({
        isCurrentlyMounted: true,
      }); 
    }

    public componentWillUnmount() {
      if (!isUndefined(this.stillnessManager)) {
        this.stillnessManager.getActions().deleteVNode({
          id: this.state.uniqueId,
        });
      }
    }
  }
   */
}
