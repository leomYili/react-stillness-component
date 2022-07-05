import React from 'react';
import { Link, useStillnessManager } from 'umi';

function Home(props: any) {
  const manager = useStillnessManager();

  return (
    <div>
      <h2>Home</h2>
      {/* <Link to="/home">Go to home page</Link>
      <Link to="/list">Go to list page</Link>
      <Link to="/about">Go to about page</Link> */}
      <button
        onClick={() => {
          manager.getActions().triggerUnset({ type: '/home' });
        }}
      >
        清除home child data
      </button>
      <hr />
      {props.children}
    </div>
  );
}

export default Home;
