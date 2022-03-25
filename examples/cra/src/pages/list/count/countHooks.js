import React, { Component, useEffect, useState } from 'react';
import { useStillness } from 'react-stillness-component';

const spec = {
  mounted: (contract) => {
    console.log('开始进入静止状态', contract.getStillnessId());

    return 'mounted';
  },
  unmounted: (contract) => {
    console.log('退出静止状态');

    return 'unmounted';
  },
  collect: (contract) => {
    return {
      isStillness: contract.isStillness(),
      stillnessId: contract.getStillnessId(),
      item: contract.getStillnessItem(),
    };
  },
};

export function CountHooks(props) {
  const [count, setCount] = useState(0);
  const collected = useStillness(spec);

  useEffect(() => {
    console.log(collected);
  }, [collected]);

  return (
    <div className="count">
      <p>hook count: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Add
      </button>
      {props.children}
    </div>
  );
}
