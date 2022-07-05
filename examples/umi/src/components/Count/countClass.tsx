import React, { Component } from 'react';
import { connectStillness } from 'umi';

interface Props {
  isStillness: any;
  stillnessId: any;
}

export class Count extends Component<Props> {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="count">
        <p>count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add
        </button>
        {this.props.children}
      </div>
    );
  }
}

const spec = {
  mounted: (props, contract) => {
    console.log('开始进入静止状态', contract.getStillnessId());

    // return 'mounted';
  },
  unmounted: (props, contract) => {
    console.log('退出静止状态');

    // return 'unmounted';
  },
  collect: (props, contract) => {
    return {
      isStillness: contract.isStillness(),
      stillnessId: contract.getStillnessId(),
    };
  },
};

export default connectStillness(spec)(Count);
