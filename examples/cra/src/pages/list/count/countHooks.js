import React, { Component, useState } from 'react';
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
    };
  },
};

export function CountHooks() {
  const [count, setCount] = useState(0);
  const collected = useStillness(spec);

  console.log(collected);

  return (
    <div className="count">
      <p>class count: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
