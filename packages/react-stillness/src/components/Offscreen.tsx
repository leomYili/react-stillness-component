import React, { Component, ComponentType, createRef } from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';

import { StillnessNodeContext } from '../core';
import { operationTypes } from '../constants';
import { withNodeBridge } from '../decorators';
import {
  UniqueId,
  StillnessManager,
  StillnessActions,
  Identifier,
  OperationTypes,
} from '../types';
import {
  shallowEqual,
  createWrapperElement,
  getScrollPropertyInNodes,
  isRealChildNode,
  isBoolean,
  throttle,
} from '../utils';

export interface OffscreenProps {
  /**
   * Components are only rendered realistically when visible is turned on
   */
  visible: boolean;
  /**
   * Optional, for grouping stillness components
   * Components of the same group can be stationary at the same time
   */
  type?: UniqueId;
  /**
   * Optional,When the presence of a scrolling element is detected,
   * the scroll position will be automatically saved by default, if this feature is not needed, set to false
   */
  scrollReset?: boolean;
  children?: React.ReactNode;
}

export type OffscreenInnerProps = OffscreenProps & {
  uniqueId: UniqueId;
  parentIsStillness: boolean;
  isStillness: boolean;
  stillnessManager: StillnessManager;
};

class OffscreenComponent extends Component<
  React.PropsWithChildren<OffscreenInnerProps>
> {
  static displayName = 'Offscreen';
  static defaultProps = {
    scrollReset: true,
  };

  private actions: StillnessActions;
  private helpRef: any = createRef();
  private targetElement: HTMLElement = createWrapperElement();
  private cacheNodes: { node: Element; left: number; top: number }[] = [];
  private uniqueId: UniqueId;

  constructor(props: OffscreenInnerProps) {
    super(props);

    this.uniqueId = props.uniqueId;
    this.actions = props.stillnessManager.getActions();
  }

  private unmount = (init: boolean = false) => {
    this.helpRef?.current?.insertAdjacentElement(
      'afterend',
      this.targetElement
    );

    if (this.props.scrollReset) {
      // reset
      this.cacheNodes.forEach(({ node, left, top }, index) => {
        node.scrollLeft = left;
        node.scrollTop = top;
      });
    }

    if (!init) {
      this.actions.triggerUnmount({ id: this.uniqueId });
    }
  };

  private mount = () => {
    try {
      if (
        this.helpRef?.current?.parentNode !== null &&
        !this.props.parentIsStillness
      ) {
        this.helpRef?.current?.parentNode?.removeChild(this.targetElement);
        this.forceUpdate();
      }

      this.actions.triggerMount({
        id: this.uniqueId,
      });
    } catch (error) {
      // console.error(error, 'Offscreen.unMount: parentNode is null')
    }
  };

  private listenerTargetElementChildScroll = () => {
    if (this.props.scrollReset) {
      this.targetElement.addEventListener(
        'scroll',
        throttle(
          (e: any) => {
            if (isRealChildNode(this.targetElement, e.target)) {
              let index = this.cacheNodes.findIndex((el) => {
                return el.node === e.target;
              });

              if (index !== -1) {
                this.cacheNodes[index] = {
                  node: e.target,
                  left: e.target.scrollLeft || 0,
                  top: e.target.scrollTop || 0,
                };
              } else {
                this.cacheNodes.push({
                  node: e.target,
                  left: e.target.scrollLeft || 0,
                  top: e.target.scrollTop || 0,
                });
              }
            }
          },
          this,
          200
        ),
        true
      );
    }
  };

  public shouldComponentUpdate(
    nextProps: Readonly<OffscreenInnerProps>
  ): boolean {
    return !shallowEqual(this.props, nextProps);
  }

  public componentDidUpdate(prevProps: Readonly<OffscreenInnerProps>): void {
    if (prevProps.isStillness !== this.props.isStillness) {
      if (!this.props.isStillness) {
        this.unmount();
      } else {
        this.mount();
      }
    }
  }

  public render() {
    return (
      <StillnessNodeContext.Provider
        value={{
          stillnessParentId: this.uniqueId,
        }}
      >
        <div
          data-key={this.uniqueId}
          ref={this.helpRef}
          style={{ display: 'none' }}
        />
        {ReactDOM.createPortal(this.props.children, this.targetElement)}
      </StillnessNodeContext.Provider>
    );
  }

  public componentDidMount() {
    if (!this.props.isStillness) {
      this.unmount(true);
      this.listenerTargetElementChildScroll();
    }
  }

  public componentWillUnmount() {
    try {
      if (this.helpRef?.current?.parentNode !== null) {
        this.helpRef?.current?.parentNode.removeChild(this.targetElement);
      }
      ReactDOM.unmountComponentAtNode(this.targetElement);
    } catch (error) {
      // console.error(error, 'Offscreen.unMount: parentNode is null')
    }
  }
}

export default withNodeBridge(OffscreenComponent);
