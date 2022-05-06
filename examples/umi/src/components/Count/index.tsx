import { useState } from "react";
import { useStillness } from "react-stillness-component";

export default function Count() {
  const [count, setCount] = useState(0);
  /* const collected = useStillness({
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
  });*/

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
