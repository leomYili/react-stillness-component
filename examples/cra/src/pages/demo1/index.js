import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { StillnessProvider, Offscreen } from 'react-stillness-component';

import { CountHooks } from '../list/count/countHooks';

import CustomSwitch from './CustomSwitch';

export default function demo1({ match, location }) {
  return (
    <>
      <header>
        <p>
          <Link to={`${match.url}/one`} className="App-link">
            去one
          </Link>
        </p>
        <p>
          <Link to={`${match.url}/two`} className="App-link">
            去two
          </Link>
        </p>
      </header>
      <hr />
      <Route
        render={({ match, location }) => {
          // return <List active />;

          return (
            <CustomSwitch>
              <Route
                path={`/demo1/one`}
                exact
                children={(props) => {
                  console.log(props);
                  return <CountHooks />;
                }}
              ></Route>
              <Route
                path={`/demo1/two`}
                exact
                render={(props) => {
                  return <div>two</div>;
                }}
              />
            </CustomSwitch>
          );
        }}
      />
    </>
  );
}
