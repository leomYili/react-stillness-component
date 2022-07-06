import React from 'react';
import { Offscreen } from 'umi';
import Count from '../components/Count';

export default function a() {
  return (
    <>
      <div>
        <h2>a</h2>

        <Count />
      </div>
      <Offscreen visible>
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <div style={{ width: 600 }}>
            这是测试文字,一直延长, 这是测试文字,一直延长 这是测试文字,一直延长
            这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
            这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
            这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
            这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
          </div>
        </div>
      </Offscreen>
    </>
  );
}
