import React, { useState } from 'react';

import { CountHooks } from './CountHooks';

import { Offscreen } from 'react-stillness-component';

export default function Demo3({ match, location }) {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        background: '#8bc34a',
      }}
    >
      <Offscreen visible={visible}>
        <CountHooks parentCount={count} />
      </Offscreen>
      <button
        onClick={() => {
          setVisible(!visible);
          setCount(count + 1);
        }}
      >
        切换显隐状态
      </button>
    </div>
  );
}
