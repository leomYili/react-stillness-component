import React, { Component, createRef } from 'react';
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
import { shallowEqual, createWrapperElement, isBoolean } from '../utils';

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
  children: React.ReactNode;
}

export type OffscreenInnerProps = OffscreenProps & {
  uniqueId: UniqueId;
  isStillness: boolean;
  stillnessManager?: StillnessManager;
};

class OffscreenComponent extends Component<OffscreenInnerProps> {
  static displayName = 'Offscreen';
  static defaultProps = {
    scrollReset: true,
  };

  private actions: StillnessActions;
  private helpRef: any = createRef();
  private targetElement: HTMLElement = createWrapperElement();
  private cacheNodes: any[] = [];
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
      // 恢复该节点下可滚动元素的滚动位置
    }

    if (!init) {
      this.actions.triggerUnmount({ id: this.uniqueId });
    }
  };

  private mount = () => {
    try {
      if (this.helpRef?.current?.parentNode !== null) {
        this.helpRef?.current?.parentNode.removeChild(this.targetElement);
      }

      if (this.props.scrollReset) {
        // 保存该节点下可滚动元素的滚动位置
      }

      this.actions.triggerMount({
        id: this.uniqueId,
      });
    } catch (error) {
      // console.error(error, 'Offscreen.unMount: parentNode is null')
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
    }
  }

  public componentWillUnmount() {
    try {
      if (this.helpRef?.current?.parentNode !== null) {
        this.helpRef?.current?.parentNode.removeChild(this.targetElement);
      }
    } catch (error) {
      // console.error(error, 'Offscreen.unMount: parentNode is null')
    }
  }
}

export const Offscreen = withNodeBridge(OffscreenComponent);
