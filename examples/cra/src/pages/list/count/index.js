import React, { Component, useState } from 'react';


export const Count = (props) => {
  const [count, setCount] = useState(0);

  console.log(props);

  return (
    <div className="count">
      <p>function count: {count}</p>
      <button
        onClick={() => {
          console.log('点击??????');
          setCount((count) => count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

