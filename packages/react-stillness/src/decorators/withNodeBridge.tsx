import React, { Component, ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';

import { OffscreenProps } from '../components';
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
  isCurrentlyMounted: boolean;
}

export function withNodeBridge(
  DecoratedComponent: ComponentType<OffscreenProps>
): ComponentType<OffscreenProps> {
  const Decorated: any = DecoratedComponent;

  const displayName = Decorated.displayName || Decorated.name || 'Component';

  class WrapperComponent extends Component<
    OffscreenProps,
    DecoratedComponentState
  > {
    public static displayName = 'WithNodeBridge';
    public static DecoratedComponent = DecoratedComponent;
    public static contextType?: React.Context<StillnessContextType> =
      StillnessContext;

    private stillnessManager: StillnessManager | undefined;
    private stillnessParentId: Identifier;

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
            this.stillnessManager.getActions().updateStillnessVNode({
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
      this.stillnessManager.getActions().createStillnessVNode({
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
        this.stillnessManager.getActions().deleteStillnessVNode({
          id: this.state.uniqueId,
        });
      }
    }
  }

  return hoistNonReactStatics(
    WrapperComponent,
    DecoratedComponent
  ) as any as ComponentType<OffscreenProps>;
}
