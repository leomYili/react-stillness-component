import React from 'react';

function Three() {
  return (
    <div style={{ overflowX: 'auto', height: '200px' }}>
      <div style={{ height: 700 }}>
        这是测试文字,一直延长, 这是测试文字,一直延长 这是测试文字,一直延长
        这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
        这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
        这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
        这是测试文字,一直延长 这是测试文字,一直延长 这是测试文字,一直延长
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      stillness: true,
    },
  };
}

export default Three;