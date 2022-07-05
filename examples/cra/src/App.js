import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import List from './pages/list';
import About from './pages/about';
import Detail from './pages/detail';
import Demo1 from './pages/demo1';
import Demo2 from './pages/demo2';
import logo from './logo.svg';
import './App.css';

import { StillnessProvider, Offscreen } from 'react-stillness-component';

function App() {
  return (
    <StillnessProvider>
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
              去demo1
            </Link>
            <Link to={'/demo2'} className="App-link">
              去demo2
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
          </Switch>
        </div>
      </BrowserRouter>
    </StillnessProvider>
  );
}

export default App;
