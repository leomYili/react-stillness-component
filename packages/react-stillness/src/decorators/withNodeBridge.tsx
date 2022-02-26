import React, { Component } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';

import { OffscreenProps } from '../components/Offscreen';
import { StillnessContext, StillnessNodeContext } from '../core';
import { isUndefined, shallowEqual, getNextUniqueId } from '../utils';
import {
  StillnessContextType,
  StillnessManager,
  Identifier,
  UniqueId,
} from '../types';

interface DecoratedComponentState {
  uniqueId: UniqueId;
  uniqueGroupId: UniqueId;
}

export function withNodeBridge(
  DecoratedComponent: any
): Component<OffscreenProps> {
  const Decorated: any = DecoratedComponent;

  const displayName = Decorated.displayName || Decorated.name || 'Component';

  class WrapperComponent extends Component<
    OffscreenProps,
    DecoratedComponentState
  > {
    public static displayName = `WithNodeBridge(${displayName})`;

    public static DecoratedComponent = DecoratedComponent;
    public static contextType?: React.Context<StillnessContextType> =
      StillnessContext;

    private stillnessManager: StillnessManager | undefined;
    private stillnessParentId: Identifier;
    private isCurrentlyMounted = false;

    constructor(props: OffscreenProps) {
      super(props);

      this.state = {
        uniqueId: props?.id ?? `__stillnessNode-${getNextUniqueId()}__`,
        uniqueGroupId:
          props?.groupId ?? `__stillnessGroup-${getNextUniqueId()}__`,
      };
    }

    private receiveManager(
      stillnessManager: StillnessManager,
      stillnessParentId: Identifier
    ) {
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

      this.stillnessParentId = stillnessParentId ?? `__root__`;
    }

    private init(props: OffscreenProps) {
      if (isUndefined(this.stillnessManager)) {
        return;
      }

      this.stillnessManager.getActions().createStillnessVNode({
        id: this.state.uniqueId,
        groupId: this.state.uniqueGroupId,
        parentId: this.stillnessParentId,
        visible: props.visible,
      });

      console.log(this.stillnessManager.getStore());
    }

    public componentDidMount() {
      // 初始化操作,检测是否已存在相同id的缓存,如果存在,则更新缓存,并提醒用户
      // 初始化完毕,开启预览
      this.isCurrentlyMounted = true;
      this.init(this.props);
    }

    public componentDidUpdate(prevProps: OffscreenProps) {
      if (!shallowEqual(this.props, prevProps)) {
        const oldId = this.state.uniqueId;
        this.setState(
          {
            uniqueId: this.props.id ?? `__stillnessNode-${getNextUniqueId()}__`,
            uniqueGroupId:
              this.props.groupId ?? `__stillnessGroup-${getNextUniqueId()}__`,
          },
          () => {
            this.stillnessManager.getActions().updateStillnessVNode({
              oldId,
              id: this.state.uniqueId,
              groupId: this.state.uniqueGroupId,
              visible: this.props.visible,
            });

            console.log(JSON.stringify(this.stillnessManager.getStore()));
          }
        );
      }
    }

    public render() {
      return (
        <StillnessNodeContext.Consumer>
          {({ stillnessParentId }) => {
            if (isUndefined(this.context?.stillnessManager)) {
              return null;
            }
            this.receiveManager(
              this.context?.stillnessManager,
              stillnessParentId
            );
            if (!this.isCurrentlyMounted) {
              return null;
            }
            return (
              <DecoratedComponent
                {...this.props}
                id={this.state.uniqueId}
                groupId={this.state.uniqueGroupId}
              ></DecoratedComponent>
            );
          }}
        </StillnessNodeContext.Consumer>
      );
    }

    public componentWillUnmount() {
      // 卸载组件下的所有缓存
      this.isCurrentlyMounted = false;

      this.stillnessManager.getActions().deleteStillnessVNode({
        id: this.state.uniqueId,
      });
    }
  }

  return hoistNonReactStatics(
    WrapperComponent,
    DecoratedComponent
  ) as any as Component<OffscreenProps>;
}
