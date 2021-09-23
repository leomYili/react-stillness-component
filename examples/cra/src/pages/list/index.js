import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    setTimeout(() => setInfo('模拟请求列表真实数据'), 1500);
  }, []);

  return (
    <div>
      <h3>这是列表页 && 数据为{info}</h3>
      <button>
        <Link to={'/detail'}>进入详情页</Link>
      </button>
    </div>
  );
};

export default List;
