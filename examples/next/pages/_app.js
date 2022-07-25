import { StillnessProvider } from 'react-stillness-component';
import '../styles/globals.css';

import StillnessSwitch from '../components/StillnessSwitch';

function MyApp({ Component, pageProps }) {
  return (
    <StillnessProvider debugMode>
      <StillnessSwitch Component={Component} pageProps={pageProps} />
    </StillnessProvider>
  );
}

export default MyApp;
