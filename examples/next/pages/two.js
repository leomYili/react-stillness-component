import React from 'react';

function Two() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      不静止的页面{count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

export default Two;
