---
sidebar_position: 1
id: useStillness
title: useStillness
---

> `useStillness` connects the React component to the stillness-component control center, which provides the connected component with data from the control center and the functions it can use to manipulate the still, and you can declare the properties and methods you want

## usage

```jsx
import { useStillness } from 'react-stillness-component';

function Count(props) {
  const [count, setCount] = useState(0);
  const collected = useStillness({
    mounted: (contract) => {
      return 'mounted';
    },
    unmounted: (contract) => {
      return 'unmounted';
    },
    collect: (contract) => {
      return {
        isStillness: contract.isStillness(),
        stillnessId: contract.getStillnessId(),
        item: contract.getStillnessItem(),
      };
    },
  });

  useEffect(() => {
    console.log(collected);
  }, [collected]);

  return <div>...</div>;
}
```

## Parameters

- `mounted`: optional, **function**, used to describe the initialization behavior of a stationary component with the following parameters
  - `props`: optional, **object**, the props of the component
  - `contract`: Required, **object**, the contract of the component, see [Contract State](api/contract-state.md) for more information
- `unmounted`: optional, **function**, used to describe the unmounting behavior of a stillness-component with the following arguments
  - `props`: optional, **object**, the props of the component
  - `contract`: Required, **object**, the contract of the component, see [Contract State](api/contract-state.md) for more information
- `collect`: optional, **function**, used to describe the data collection behavior of a stillness-component with the following parameters
  - `props`: optional, **object**, the props of the component
  - `contract`: optional, **object**, the contract of the component, see [Contract State](api/contract-state.md) for more information
