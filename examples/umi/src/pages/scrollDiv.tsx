import React, { Component, useState } from 'react';
import { Card } from 'antd';

export const ScrollDiv = (props: any) => {
  const [show, setShow] = useState(true);

  return (
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <div style={{ height: 200, overflow: 'auto' }}>
        <p>Card content1</p>
        <p>Card content2</p>
        <p>Card content3</p>
        <p>Card content4</p>
        <p>Card content5</p>
        <p>Card content6</p>
        <p>Card content7</p>
        <p>Card content8</p>
        <p>Card content9</p>
        <p>Card content10</p>
        <p>Card content11</p>
      </div>
    </Card>
  );
};
