import React, { Component, useState, useRef, useEffect } from 'react';

import { Offscreen } from 'react-stillness-component';

export const Count = (props) => {
  const [count, setCount] = useState(0);

  const offscreen1Ref = useRef(null);

  /* useEffect(() => {
    console.log(offscreen1Ref.current?.isStillness());
  }); */

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
      <div
        style={{
          padding: '10px',
          margin: '10px',
          background: '#9c27b0',
        }}
      >
        <Offscreen type={'list'} visible={true} ref={offscreen1Ref}>
          <div>测试嵌套结构</div>
        </Offscreen>
      </div>
    </div>
  );
};
