import React, { Component } from 'react';
import { connectStillness } from 'react-stillness-component';

export class Count extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="count">
        <p>class count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

const spec = {
  mounted: (props, monitor) => {
    console.log('开始进入静止状态', props, monitor);
  },
  unmounted: (props, monitor) => {
    console.log('退出静止状态', props, monitor);
  },
};

const collect = (props, monitor) => {
  return {
    isStillness: monitor.isStillness(),
  };
};

export const WithCount = connectStillness({ spec, collect })(Count);