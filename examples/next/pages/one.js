import React from 'react';
import { Offscreen } from 'react-stillness-component';

function One() {
  const [count, setCount] = React.useState(0);

  return (
    <Offscreen visible>
      <div>
        会静止的页面{count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          add
        </button>
      </div>
    </Offscreen>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      stillness: true,
    },
  };
}

export default One;
