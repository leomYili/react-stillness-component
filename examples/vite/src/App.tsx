import { useState } from 'react';
import { StillnessProvider, Offscreen } from 'react-stillness-component';

import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  console.log(visible);

  return (
    <StillnessProvider debugMode>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <Offscreen visible={visible}>
            <p>
              <button
                type="button"
                onClick={() => setCount((count) => count + 1)}
              >
                count is: {count}
              </button>
            </p>
          </Offscreen>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            switch
          </button>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </StillnessProvider>
  );
}

export default App;
