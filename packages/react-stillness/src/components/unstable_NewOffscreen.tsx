import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';

import { StillnessContext, StillnessNodeContext } from '../core';
import { withNodeBridge } from '../decorators';
import { UniqueId, StillnessContextType } from '../types';
import { OffscreenProps } from './Offscreen';
import {
  getNextUniqueId,
  shallowEqual,
  isPlainObject,
  isRefAble,
  createWrapperElement,
} from '../utils';

interface OffscreenState {
  init: boolean;
}

class OffscreenComponent extends Component<OffscreenProps, OffscreenState> {
  static displayName = 'Offscreen';
  static defaultProps = {
    scrollReset: true,
  };

  public static contextType?: React.Context<StillnessContextType> =
    StillnessContext;
  private helpRef: any = createRef();
  private targetElement: HTMLElement = createWrapperElement();
  private cacheNodes: any[] = [];
  private uniqueId: UniqueId;
  private uniqueGroupId: UniqueId;
  private nestId = `__stillness-child-${getNextUniqueId()}__`;

  constructor(props: OffscreenProps) {
    super(props);

    this.uniqueId = props?.id;
    this.uniqueGroupId = props?.groupId;
    this.state = {
      init: false,
    };
  }

  private mount = () => {
    // this.manager.getMonitor().triggerMountQueue(this.uniqueId);
    // dispatch({type: 'update', payload:{id: this.uniqueId, visible: true}});
    // dom节点操作以及消息通知,执行所有对应的生命周期函数
    /* this.helpRef?.current?.insertAdjacentElement(
      'afterend',
      this.targetElement
    ); */
    // this.helpRef.current?.parentNode?.insertBefore(,this.helpRef.current);

    let fragment = document.createDocumentFragment();

    let firstChild;

    for (let i = 0; i < this.targetElement.childNodes.length; i++) {
      const child = this.targetElement.childNodes[i].cloneNode(true);
      fragment.appendChild(child);
      this.cacheNodes.push(child);
    }

    console.log(this.cacheNodes, fragment, this.targetElement);

    this.helpRef.current?.parentNode?.insertBefore(
      fragment,
      this.helpRef.current
    );
  };

  private unmount = () => {
    /* try {
      // this.manager.getMonitor().triggerUnMountQueue(this.uniqueId);
      // dispatch({type: 'update', payload:{id: this.uniqueId, visible: true}});

      if (this.helpRef?.current?.parentNode !== null) {
        this.helpRef?.current?.parentNode.removeChild(this.targetElement);
      }
    } catch (error) {
      // console.error(error, 'Offscreen.unMount: parentNode is null')
    } */
  };

  private childrenWithProps = (children) => {
    return React.Children.map(children, (child) => {
      console.log(child);
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {});
      }

      return child;
    });
  };

  public shouldComponentUpdate(
    nextProps: Readonly<OffscreenProps>,
    nextState: Readonly<{}>
  ): boolean {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }

  public componentDidUpdate(prevProps: Readonly<OffscreenProps>): void {
    if (
      !shallowEqual(this.props, prevProps) &&
      prevProps.visible !== this.props.visible
    ) {
      if (this.props.visible) {
        this.mount();
      } else {
        this.unmount();
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
        >
          {this.helpRef.current !== null &&
            this.state.init &&
            ReactDOM.createPortal(
              this.childrenWithProps(this.props.children),
              this.targetElement
            )}
        </div>
      </StillnessNodeContext.Provider>
    );
  }

  public componentDidMount() {
    if (this.props.visible) {
      this.setState(
        {
          init: true,
        },
        () => {
          this.helpRef.current.parentNode.insertBefore(
            this.targetElement,
            this.helpRef.current
          );

          this.mount();
        }
      );
    }
  }
}

export const NewOffscreen = withNodeBridge(OffscreenComponent);
