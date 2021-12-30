import styles from './index.less';

import { StillnessProvider } from 'react-stillness-component';

export default function IndexPage() {
  return (
    <StillnessProvider>
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
    </StillnessProvider>
  );
}
