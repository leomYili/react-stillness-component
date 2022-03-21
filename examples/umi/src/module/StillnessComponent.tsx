import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  id: string;
  _actions: any;
}

export class StillnessComponent extends Component<Props> {
  private myRef: any;
  private realChildren: any;
  private realContainer: any;

  state = {
    isMounted: false,
    realComponent: null,
  };

  constructor(props: any) {
    super(props);

    this.myRef = React.createRef();

    this.init();
  }

  componentDidMount() {
    // this.init();
  }

  componentDidUpdate() {
    // 这里做个对比,判断context中是否发生了变化
    const {
      _actions: { getVNode, create, update },
      id,
    } = this.props;
    console.log(getVNode(id));
  }

  componentWillUnmount() {
    const {
      _actions: { getVNode, update, transfer },
      id,
    } = this.props;

    if (this.realContainer?.parentNode !== null) {
      this.realContainer?.parentNode.removeChild(this.realContainer);
    }

    update(id, { isStillness: true });
  }

  insertFragMent = (childNodes: any) => {
    const fragment = document.createDocumentFragment();

    childNodes.forEach((child: any) => {
      fragment.appendChild(child);
    });

    return fragment;
  };

  init = () => {
    const {
      _actions: { getVNode, create, update },
      id,
    } = this.props;

    if (!getVNode(id)) {
      create(id, { isStillness: false, children: this.props.children }, () => {
        console.log('已初始化');
        const vNode = getVNode(id);
        this.realChildren = vNode.children;

        const parentDom = this.myRef.current.parentNode;

        //let container = this.insertFragMent(vNode.extraDom.childNodes);
        this.realContainer = this.myRef.current.insertAdjacentElement(
          'afterend',
          vNode.extraDom,
        );
        // this.myRef.current.appendChild(vNode.extraDom);

        this.setState({
          isMounted: true,
          realComponent: vNode.extraDom,
        });
      });
    } else {
      const vNode = getVNode(id);
      update(id, { isStillness: false });
      this.realChildren = vNode.children;

      //const parentDom = this.myRef.current.parentNode;

      setTimeout(() => {
        this.setState({
          isMounted: true,
          realComponent: vNode.extraDom,
        });
      });

      // let container = this.insertFragMent(vNode.extraDom.childNodes);

      this.realContainer = this.myRef.current.insertAdjacentElement(
        'afterend',
        vNode.extraDom,
      );
      // this.myRef.current.appendChild(vNode.extraDom);
    }
  };

  render() {
    return (
      <div className="stillness-component" ref={this.myRef}>
        {/* {this.state.isMounted &&
          ReactDOM.createPortal(this.state.realComponent, this.myRef.current)} */}
      </div>
    );
  }
}
