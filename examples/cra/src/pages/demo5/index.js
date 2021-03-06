import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Offscreen } from 'react-stillness-component';
import { WithCount } from '../list/count/countClass';

const List = (props) => {
  const [info, setInfo] = useState('');
  const [visible, setVisible] = useState(true);
  const [visibleTwo, setVisibleTwo] = useState(true);

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
          A
          <WithCount />
        </Offscreen>
      </div>

      <div
        style={{
          background: '#8bc34a',
        }}
      >
        <Offscreen visible={visibleTwo}>
          B
          <WithCount>
            <div
              style={{
                display: 'block',
                margin: '20px',
                background: '#bedaff',
              }}
              ref={testRef}
            >
              <Offscreen visible>
                <WithCount />
              </Offscreen>
            </div>
          </WithCount>
        </Offscreen>
      </div>

      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换A显隐状态
      </button>

      <button
        onClick={() => {
          setVisibleTwo(!visibleTwo);
        }}
      >
        切换B显隐状态
      </button>

      <div style={{ marginTop: 10 }}>
        <button
          onClick={() => {
            offscreen1Ref.current.clear();
          }}
        >
          清除所有缓存
        </button>
        <button
          onClick={() => {
            console.log(offscreen1Ref.current.getStillnessId());
            offscreen1Ref.current.unset({
              id: offscreen1Ref.current.getStillnessId(),
            });
          }}
        >
          清除第一个组件id缓存
        </button>
        <button
          onClick={() => {
            offscreen1Ref.current.unset({
              type: 'list',
            });
          }}
        >
          清除所有type为list的组件缓存
        </button>
      </div>
    </div>
  );
};

export default List;
//export default withStillness({ id: 'list', spec, collect })(List);
