import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { withStillness } from 'react-stillness-component';

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

const spec = {
  didStillness: (props, monitor) => {
    console.log('开始进入静止状态', props, monitor);
  },
  willUnStillness: (props, monitor) => {
    console.log('退出静止状态', props, monitor);
  },
};

const collect = (props,monitor) => {
  return {
    isStillness: monitor.isStillness()
  }
};

export default withStillness({ id: 'list', spec, collect })(List);
