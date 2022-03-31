import React, { useState, useRef } from 'react';
import {
  StillnessProvider,
  Offscreen,
  useStillness,
} from 'react-stillness-component';
import Translate, { translate } from '@docusaurus/Translate';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Admonition from '@theme/Admonition';

import styles from './styles.module.css';

const code = `  function App() {
    const [show, setShow] = useState(true);

    return (
      <div>
        <button onClick={() => setShow(show => !show)}>Toggle</button>
        <Offscreen visible={show}>
          <Count />
        </Offscreen>
      </div>
    );
  }

  function Count() {
    const [count, setCount] = useState(0);
    const collected = useStillness({
      mounted: (contract) => {
        return 'mounted';
      },
      unmounted: (contract) => {
        return 'unmounted';
      },
      collect: (contract) => {
        return {
          isStillness: contract.isStillness(),
          stillnessId: contract.getStillnessId(),
        };
      },
    });  
  
    return (
      <div className="count">
        stillness:{collected.isStillness.toString()}
        <p>class count: {count}</p>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Add
        </button>
      </div>
    );
  }

  render(
    <StillnessProvider>
      <App />
    </StillnessProvider>
  )
  `;

export const HomepageEditor = () => {
  const scope = {
    StillnessProvider,
    Offscreen,
    useStillness,
    useRef,
    useState,
  };

  return (
    <div className={styles.second}>
      <div className={styles.title}>
        <Translate id={'homepage.editorTitle'}>Online Demo</Translate>
      </div>
      <div className={styles.subTitle}>
        <Translate id={'homepage.editorSubTitle'}>
          In the React framework, you only need a simple piece of code to
          achieve keep-alive effects, which can improve your work efficiency.
        </Translate>
      </div>
      <div className={styles.liveContainer}>
        <div className={styles.codeTop}>
          <i className={styles.dot1} />
          <i className={styles.dot2} />
          <i className={styles.dot3} />
        </div>
        <div className={styles.liveWrapper}>
          <LiveProvider noInline code={code} scope={scope}>
            <div className={`${styles.column} ${styles.editor}`}>
              <LiveEditor />
            </div>
            <div className={`${styles.column} ${styles.preview}`}>
              <LivePreview />
            </div>
            <LiveError />
          </LiveProvider>
        </div>
        <div className={styles.info}>
          <Admonition
            type="info"
            title={translate({ message: 'details', id: 'homepage.details' })}
          >
            <p>
              <Translate id={'homepage.someDetails'}>
                {`The most important part of this code is the <Offscreen> and
                useStillness calls, you can edit this code directly to see the
                effect`}
              </Translate>
            </p>
          </Admonition>
        </div>
      </div>
    </div>
  );
};
