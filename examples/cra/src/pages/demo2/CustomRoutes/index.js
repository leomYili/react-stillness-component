import React, { Component } from 'react';

import {
  createRoutesFromChildren,
  UNSAFE_RouteContext,
  useLocation,
  matchRoutes,
} from 'react-router-domv6';

const joinPaths = (paths) => paths.join('/').replace(/\/\/+/g, '/');

function _renderMatches(matches, parentMatches) {
  if (matches == null) return null;

  return matches.reduceRight((outlet, match, index) => {
    return (
      <UNSAFE_RouteContext.Provider
        children={
          match.route.element !== undefined ? match.route.element : outlet
        }
        value={{
          outlet,
          matches: parentMatches.concat(matches.slice(0, index + 1)),
        }}
      />
    );
  }, null);
}

function useRoutes(routes, locationArg) {
  let { matches: parentMatches } = React.useContext(UNSAFE_RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : '/';
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : '/';
  let parentRoute = routeMatch && routeMatch.route;

  let locationFromContext = useLocation();

  let location = locationFromContext;

  let pathname = location ? location.pathname : '/';
  let remainingPathname =
    parentPathnameBase === '/'
      ? pathname
      : pathname.slice(parentPathnameBase.length) || '/';
  let matches = matchRoutes(routes, { pathname: remainingPathname });

  console.log(matches, parentMatches, remainingPathname);

  return _renderMatches(
    matches &&
      matches.map((match) =>
        Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([parentPathnameBase, match.pathname]),
          pathnameBase:
            match.pathnameBase === '/'
              ? parentPathnameBase
              : joinPaths([parentPathnameBase, match.pathnameBase]),
        })
      ),
    parentMatches
  );
}

export const StillnessRoutes = (props, location) => {
  let locationFromContext = useLocation();
  let { matches: parentMatches } = React.useContext(UNSAFE_RouteContext);

  console.log(locationFromContext);

  return useRoutes(createRoutesFromChildren(props.children), location);
};
