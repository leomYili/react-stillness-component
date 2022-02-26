import React, { Component, useState } from 'react';

export const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="count">
      <p>count: {count}</p>
      <button
        onClick={() => {
          console.log("点击??????")
          setCount((count) => count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};
