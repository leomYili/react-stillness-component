import React, { Component } from 'react';

import { Consumer } from './StillnessContext';
import { StillnessComponent } from './StillnessComponent';

const withStillnessHoc = (WrappedComponent: any) => {
  return class extends Component {
    private extraDom: any = null;
    private myRef: React.RefObject<unknown>;

    constructor(props: any) {
      super(props);

      this.myRef = React.createRef();
    }

    componentDidMount() {
      /* let extraDom = document.getElementById('extraDom');

      if (!extraDom) {
        extraDom = document.createElement('div');
        extraDom.id = 'extraDom';
        document.body.appendChild(extraDom);
      }

      this.extraDom = extraDom; */
    }

    componentWillUnmount() {
      // console.log(this.props.children);
    }

    render() {
      return (
        <Consumer>
          {(context) => {
            return (
              <WrappedComponent
                ref={this.myRef}
                _actions={context.actions}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

export default withStillnessHoc(StillnessComponent);
