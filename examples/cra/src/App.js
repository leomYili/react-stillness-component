import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import List from './pages/list';
import About from './pages/about';
import Detail from './pages/detail';
import Demo1 from './pages/demo1';
import Demo2 from './pages/demo2';
import Demo3 from './pages/demo3';
import Demo4 from './pages/demo4';
import Demo5 from './pages/demo5';
import logo from './logo.svg';
import './App.css';

import { StillnessProvider, Offscreen } from 'react-stillness-component';

function App() {
  const [visible, setVisible] = useState(0);

  return (
    <StillnessProvider debugMode options={{ max: visible }}>
      {/* <Offscreen visible={visible}>
        <div>测试</div>
      </Offscreen> */}
      <button data-testid="toggle" onClick={() => setVisible(visible + 1)}>
        click
      </button>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <p>
              <img src={logo} className="App-logo" alt="logo" />
            </p>
            <Link to={'/list'} className="App-link">
              去列表页
            </Link>
            <Link to={'/demo1'} className="App-link">
              去demo1(react-router-v5)
            </Link>
            <Link to={'/demo2'} className="App-link">
              去demo2(react-router-v6)
            </Link>
            <Link to={'/demo3'} className="App-link">
              去demo3(nested node 优化)
            </Link>
            <Link to={'/demo4'} className="App-link">
              去demo4(hooks 优化)
            </Link>
            <Link to={'/demo5'} className="App-link">
              去demo5(options max)
            </Link>
          </header>
          <hr />
          <Switch>
            <Route
              path="/list"
              render={(props) => {
                console.log(props);
                return <List active />;
              }}
            />
            <Route path="/detail" component={Detail} />
            <Route path="/about" component={About} />
            <Route path="/demo1" component={Demo1} />
            <Route path="/demo2" component={Demo2} />
            <Route path="/demo3" component={Demo3} />
            <Route path="/demo4" component={Demo4} />
            <Route path="/demo5" component={Demo5} />
          </Switch>
        </div>
      </BrowserRouter>
    </StillnessProvider>
  );
}

export default App;
