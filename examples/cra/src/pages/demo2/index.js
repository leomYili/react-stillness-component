import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-domv6';

import { Offscreen } from 'react-stillness-component';

import { StillnessRoutes } from './CustomRoutes';
import { StillnessOutLets } from './StillnessOutlets';
import { WithCount } from '../list/count/countClass';

export default function demo2({ match, location }) {
  return (
    <BrowserRouter>
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StillnessOutLets />
            </>
          }
        >
          <Route path={`/demo2/one`} element={<WithCount />} />
          <Route path={`/demo2/two`} element={<div>two</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
