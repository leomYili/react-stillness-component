import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';

import { StillnessContext, StillnessNodeContext } from '../core';
import { withNodeBridge } from '../decorators';
import { UniqueId, StillnessContextType } from '../types';
import {
  getNextUniqueId,
  shallowEqual,
  isPlainObject,
  isRefAble,
} from '../utils';

export interface OffscreenProps {
  /**
   * Components are only rendered realistically when visible is turned on
   */
  visible: boolean;
  /**
   * Optionally, even without this prop, the component itself will automatically generate a unique identifier
   */
  id?: UniqueId;
  /**
   * Optional, for grouping stillness components
   * Components of the same group can be stationary at the same time
   */
  groupId?: UniqueId;
  /**
   * Optional,When the presence of a scrolling element is detected,
   * the scroll position will be automatically saved by default, if this feature is not needed, set to false
   */
  scrollReset?: boolean;
  [key: string]: any;
}

class OffscreenComponent extends Component<OffscreenProps> {
  static defaultProps = {
    scrollReset: true,
  };

  public static contextType?: React.Context<StillnessContextType> =
    StillnessContext;
  private helpRef: any = createRef();
  private targetElement: HTMLElement = document.createElement('div');
  private uniqueId: UniqueId;
  private uniqueGroupId: UniqueId;
  private init: boolean;

  constructor(props: OffscreenProps) {
    super(props);

    this.uniqueId = props?.id;
    this.uniqueGroupId = props?.groupId;
    this.init = props?.visible ?? false;
  }

  private mount = () => {
    // this.manager.getMonitor().triggerMountQueue(this.uniqueId);
    // dispatch({type: 'update', payload:{id: this.uniqueId, visible: true}});
    // dom节点操作以及消息通知,执行所有对应的生命周期函数

    this.helpRef?.current?.insertAdjacentElement(
      'afterend',
      this.targetElement
    );
  };

  private unMount = () => {
    try {
      // this.manager.getMonitor().triggerUnMountQueue(this.uniqueId);
      // dispatch({type: 'update', payload:{id: this.uniqueId, visible: true}});

      if (this.helpRef?.current?.parentNode !== null) {
        this.helpRef?.current?.parentNode.removeChild(this.targetElement);
      }
    } catch (error) {
      invariant(this.helpRef?.current, 'Offscreen.unMount: parentNode is null');
    }
  };

  public shouldComponentUpdate(
    nextProps: Readonly<OffscreenProps>,
    nextState: Readonly<{}>
  ): boolean {
    if (!this.init && nextProps.visible) {
      this.init = true;
    }

    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }

  public componentDidUpdate(prevProps: Readonly<OffscreenProps>): void {
    if (!shallowEqual(this.props, prevProps)) {
      if (this.props.visible) {
        this.mount();
      } else {
        this.unMount();
      }
    }
  }

  public render() {
    return (
      <StillnessNodeContext.Provider
        value={{
          stillnessParentId: this.uniqueId as any,
        }}
      >
        <div
          data-key={this.uniqueId}
          ref={this.helpRef}
          style={{ display: 'none' }}
        >
          {this.init &&
            ReactDOM.createPortal(this.props.children, this.targetElement)}
        </div>
      </StillnessNodeContext.Provider>
    );
  }
}

export const Offscreen = withNodeBridge(OffscreenComponent);