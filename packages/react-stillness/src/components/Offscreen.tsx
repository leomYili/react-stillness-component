import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';

import { StillnessNodeContext } from '../core';
import { withNodeBridge } from '../decorators';
import {
  UniqueId,
  StillnessManager,
  StillnessActions,
} from '../types';
import {
  shallowEqual,
  createWrapperElement,
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
  children: React.ReactNode;
  stillnessManager?: StillnessManager
}

class OffscreenComponent extends Component<OffscreenProps> {
  static displayName = 'Offscreen';
  static defaultProps = {
    scrollReset: true,
  };

  private actions: StillnessActions;
  private helpRef: any = createRef();
  private targetElement: HTMLElement = createWrapperElement();
  private cacheNodes: any[] = [];
  private uniqueId: UniqueId;
  private uniqueGroupId: UniqueId;

  constructor(props: OffscreenProps) {
    super(props);

    this.uniqueId = props?.id;
    this.uniqueGroupId = props?.groupId;
    this.actions = props.stillnessManager.getActions();
  }

  private mount = (init: boolean = false) => {
    // dispatch({type: 'update', payload:{id: this.uniqueId, visible: true}});

    this.helpRef?.current?.insertAdjacentElement(
      'afterend',
      this.targetElement
    );

    if (this.props.scrollReset) {
      // 恢复该节点下可滚动元素的滚动位置
    }

    if (!init) {
      // 初始化时不会触发对应的生命周期函数
      // dispatch({type: 'update', payload:{id: this.uniqueId, visible: true}});
    }
  };

  private unmount = () => {
    try {
      // dispatch({type: 'update', payload:{id: this.uniqueId, visible: true}});

      if (this.helpRef?.current?.parentNode !== null) {
        this.helpRef?.current?.parentNode.removeChild(this.targetElement);
      }

      if (this.props.scrollReset) {
        // 保存该节点下可滚动元素的滚动位置
      }
    } catch (error) {
      // console.error(error, 'Offscreen.unMount: parentNode is null')
    }
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
          {ReactDOM.createPortal(this.props.children, this.targetElement)}
        </div>
      </StillnessNodeContext.Provider>
    );
  }

  public componentDidMount() {
    if (this.props.visible) {
      this.mount(true);
    }
  }
}

export const Offscreen = withNodeBridge(OffscreenComponent);
