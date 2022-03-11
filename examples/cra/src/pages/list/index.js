import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Offscreen, OffscreenInstance } from 'react-stillness-component';
import { Count } from './count';
import { WithCount } from './count/countClass';

const List = (props) => {
  const [info, setInfo] = useState('');
  const [visible, setVisible] = useState(true);

  const testRef = useRef(null);

  const offscreen1Ref = useRef(null);

  useEffect(() => {
    // setTimeout(() => setInfo('模拟请求列表真实数据'), 1500);
    console.log(testRef);
    console.log(offscreen1Ref.current);
  }, []);

  return (
    <div
      className="list"
      onClick={() => {
        console.log('冒泡点击??????');
      }}
    >
      <h3>这是列表页 && 数据为 {info}</h3>
      <button>
        <Link to={'/detail'}>进入详情页</Link>
      </button>

      <div
        style={{
          display: 'block',
          marginBottom: '20px',
          background: '#bedaff',
        }}
      >
        <Offscreen visible={visible} type="list" ref={offscreen1Ref}>
          <div ref={testRef}>
            <Count />
          </div>
        </Offscreen>
      </div>

      {/* <div
        style={{
          background: '#8bc34a',
        }}
      >
        <Offscreen visible={visible} id="list2">
          <>sdsdsd</>
          <WithCount />
        </Offscreen>
      </div> */}

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

export default List;
//export default withStillness({ id: 'list', spec, collect })(List);
