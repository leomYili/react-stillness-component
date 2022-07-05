import React from "react";
import { Link, Route } from 'react-router-dom';

const getData = () => {
  let data = [];
  for (let i = 0; i < 200; i++) {
    data.push({ key: i, value: i });
  }
  return data;
};

export default function List({ match }: any) {
  return (
    <>
      <h2>list(scroll)</h2>
      <ul className="list">
        {getData().map((v, i) => {
          return <li key={v.key}>{v.value}</li>;
        })}
      </ul>
    </>
  );
}
