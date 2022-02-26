import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Offscreen } from 'react-stillness-component';

const List = (props) => {
  const [info, setInfo] = useState('');
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setInfo('模拟请求列表真实数据'), 1500);
  }, []);

  return (
    <div className="list">
      <h3>这是列表页 && 数据为{info}</h3>
      <button>
        <Link to={'/detail'}>进入详情页</Link>
      </button>

      <Offscreen visible={visible} id="list2">
        <div className="count">
          <p>count: {count}</p>
          <button
            onClick={() => {
              console.log('点击??????');
              setCount((count) => count + 1);
            }}
          >
            Add
          </button>
        </div>
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
};

const spec = {
  didStillness: (props, monitor) => {
    console.log('开始进入静止状态', props, monitor);
  },
  willUnStillness: (props, monitor) => {
    console.log('退出静止状态', props, monitor);
  },
};

const collect = (props, monitor) => {
  console.log(props, monitor.getStillnessId());

  return {
    isActive: monitor.isActive(),
  };
};

export default List;
//export default withStillness({ id: 'list', spec, collect })(List);
