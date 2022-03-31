---
sidebar_position: 0
id: connectStillness
title: connectStillness
---

> The `connectStillness` function connects a React component to a stillness-component control center. It provides the connected component with the data it gets from the control center and the functions it can use to manipulate the stillness, it does not modify the component passed to it, instead, it returns a new connected component.

## usage

```jsx
import { connectStillness } from 'react-stillness-component';

class Count extends Component {
  state = {
    count: 0,
  };

  render() {
    const { isStillness, stillnessId, ...rest } = this.props;
    return <div className="count">...</div>;
  }
}

const spec = {
  mounted: (props, contract) => {
    return 'mounted';
  },
  unmounted: (props, contract) => {
    return 'unmounted';
  },
};

const collect = (props, contract) => {
  return {
    isStillness: contract.isStillness(),
    stillnessId: contract.getStillnessId(),
  };
};

export const WithCount = connectStillness({ spec, collect })(Count);
```

## Parameters

- `spec`: Required, **object** , used to describe the behavior of the stationary component with
  - `mounted`: Required, **function**, used to describe the initialization behavior of the stationary component with parameters
    - `props`: Required, **object**, the props of the component
    - `contract`: Required, **object**, the contract of the component, see [Contract State](api/contract-state.md) for more information
  - `unmounted`: Required, **function**, used to describe the unmounting behavior of a stillness-component with the following arguments
    - `props`: Required, **object**, the props of the component
    - `contract`: Required, **object**, the contract of the component, see [Contract State](api/contract-state.md) for more information
- `collect`: Required, **function**, used to describe the data collection behavior of a stillness-component with the following parameters
  - `props`: Required, **object**, the props of the component
  - `contract`: Required, **object**, the contract of the component, see [Contract State](api/contract-state.md) for more information

