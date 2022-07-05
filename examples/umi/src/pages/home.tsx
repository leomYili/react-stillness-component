import React from "react";
import { Link } from 'umi';

function Home(props:any) {
  return (
    <div>
      <h2>Home</h2>
      {/* <Link to="/home">Go to home page</Link>
      <Link to="/list">Go to list page</Link>
      <Link to="/about">Go to about page</Link> */}
      <hr />
      {props.children}
    </div>
  );
}

export default Home;
