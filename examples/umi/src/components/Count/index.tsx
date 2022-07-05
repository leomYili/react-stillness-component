import React, { useState } from 'react';
import { useStillness, useStillnessManager } from 'react-stillness-component';

export default function Count() {
  const [count, setCount] = useState(0);
  const stillnessManager  = useStillnessManager();
  const collected = useStillness({
    mounted: (contract) => {
      return "mounted";
    },
    unmounted: (contract) => {
      return "unmounted";
    },
    collect: (contract) => {
      return {
        isStillness: contract.isStillness(),
        stillnessId: contract.getStillnessId()
      };
    }
  });

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
