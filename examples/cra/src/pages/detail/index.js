import React, { useEffect, useState } from 'react';

const Detail = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    setTimeout(() => setInfo('模拟请求详情真实数据'), 1500);
  }, []);

  return <div>这是详情页 && 数据为{info}</div>;
};

export default Detail;
