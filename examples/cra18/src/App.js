import { useState } from 'react';
import {
  StillnessProvider,
  Offscreen,
  useStillness,
} from 'react-stillness-component';
import logo from './logo.svg';
import './App.css';

function Content() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
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

function App() {
  return (
    <StillnessProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Content />
      </div>
    </StillnessProvider>
  );
}

export default App;
