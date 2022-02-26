import React, { Component } from 'react';
import { Divider } from 'antd';
import ReactDOM from 'react-dom';

import { Provider, Consumer } from './StillnessContext';

export class StillnessScope extends Component {
  private scopeRef: any;
  private extraDom: any = null;

  constructor(props: any) {
    super(props);

    this.scopeRef = React.createRef();

    this.extraDom = null;
  }

  state = {
    vNodes: [],
  };

  /**
   * 进行数据记录以及转移children真实渲染节点
   * @param id
   * @param params
   * @param callback
   */
  create = (id: any, params: any, callback: any) => {
    const { children } = params || {};
    const now = Date.now();
    if (this.getVNode(id)) {
      this.update(id, params);
    } else {
      let extraDom = document.createElement('div');
      let fragment = document.createDocumentFragment();

      const _extraDom = React.createElement(React.Fragment, [], children);

      console.log(_extraDom);

      this.setState(
        {
          vNodes: [
            ...this.state.vNodes,
            {
              id: id,
              createTime: now,
              updateTime: now,
              extraDom: extraDom,
              ...params,
            },
          ],
        },
        callback,
      );
    }
  };

  update = (id: any, params: any) => {
    const now = Date.now();

    if (this.getVNode(id)) {
      this.setState({
        vNodes: this.state.vNodes.map((vNode: any) => {
          if (id === vNode.id) {
            return {
              ...vNode,
              ...params,
              updateTime: now,
            };
          }

          return vNode;
        }),
      });
    }
  };

  transfer = (fiberNode: any) => {
    ReactDOM.createPortal(fiberNode, this.scopeRef.current);
    this.forceUpdate();
  };

  getVNode = (id: any) => {
    return this.state.vNodes.find((item: any) => item.id === id);
  };

  drop = (id: any) => {
    const now = Date.now();

    if (this.getVNode(id)) {
      let extraDom = document.createElement('div');

      this.setState(
        {
          vNodes: this.state.vNodes.map((vNode: any) => {
            if (id === vNode.id) {
              return {
                ...vNode,
                updateTime: now,
                extraDom: extraDom,
              };
            }

            return vNode;
          }),
        },
        () => {
          console.log(this.state);
        },
      );
    }
  };

  actions = {
    create: this.create,
    update: this.update,
    getVNode: this.getVNode,
    transfer: this.transfer,
    getVNodes: () => {
      return this.state.vNodes;
    },
    drop: this.drop,
  };

  render() {
    return (
      <Provider value={{ actions: this.actions }}>
        {this.props.children}
        <Divider>已被隐藏的组件集合</Divider>
        {/* <div ref={this.scopeRef} style={{}} /> */}
        {this.state.vNodes.map((vNode: any) => {
          return ReactDOM.createPortal(vNode?.children, vNode.extraDom);
        })}
      </Provider>
    );
  }
}
