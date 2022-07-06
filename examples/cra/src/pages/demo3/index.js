import React, { Component, useState } from 'react';

import { WithCount } from '../list/count/countClass';

import { Offscreen } from 'react-stillness-component';

export default function Demo3({ match, location }) {
  const [visible, setVisible] = useState(true);

  return (
    <div
      style={{
        background: '#8bc34a',
      }}
    >
      <Offscreen visible={visible}>
        <WithCount>
          <div
            style={{
              display: 'block',
              margin: '20px',
              background: '#bedaff',
            }}
          >
            <Offscreen visible>
              <div style={{ overflowX: 'auto', height: '200px' }}>
                <div style={{ height: 500 }}>
                  这是测试文字,一直延长, 这是测试文字,一直延长
                  这是测试文字,一直延长 这是测试文字,一直延长
                  这是测试文字,一直延长 这是测试文字,一直延长
                  这是测试文字,一直延长 这是测试文字,一直延长
                  这是测试文字,一直延长 这是测试文字,一直延长
                  这是测试文字,一直延长 这是测试文字,一直延长
                  这是测试文字,一直延长 这是测试文字,一直延长
                  这是测试文字,一直延长
                </div>
              </div>
              <WithCount>
                <div
                  style={{
                    display: 'block',
                    margin: '20px',
                    background: '#cddc39',
                  }}
                >
                  <Offscreen visible>
                    <div style={{ overflowX: 'auto', width: '100%' }}>
                      <div style={{ width: 1000 }}>
                        这是测试文字,一直延长, 这是测试文字,一直延长
                        这是测试文字,一直延长 这是测试文字,一直延长
                        这是测试文字,一直延长 这是测试文字,一直延长
                        这是测试文字,一直延长 这是测试文字,一直延长
                        这是测试文字,一直延长 这是测试文字,一直延长
                        这是测试文字,一直延长 这是测试文字,一直延长
                        这是测试文字,一直延长 这是测试文字,一直延长
                        这是测试文字,一直延长
                      </div>
                    </div>
                  </Offscreen>
                </div>
              </WithCount>
            </Offscreen>
          </div>
        </WithCount>
      </Offscreen>

      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换显隐状态
      </button>
    </div>
  );
}
