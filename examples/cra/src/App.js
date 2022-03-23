import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import List from './pages/list';
import About from './pages/about';
import Detail from './pages/detail';
import logo from './logo.svg';
import './App.css';

import { StillnessProvider } from 'react-stillness-component';

function App() {
  return (
    <StillnessProvider debugMode>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <p>
              <img src={logo} className="App-logo" alt="logo" />
            </p>
            <Link to={'/list'} className="App-link">
              去列表页
            </Link>
          </header>

          <Switch>
            <Route path="/list" render={() => <List active />} />
            <Route path="/detail" component={Detail} />
            <Route path="/about" component={About} />
          </Switch>
          <div
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#ccc',
              marginTop: 10,
            }}
          ></div>
        </div>
      </BrowserRouter>
    </StillnessProvider>
  );
}

export default App;
