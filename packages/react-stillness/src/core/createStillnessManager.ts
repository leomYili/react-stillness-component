import { useReducer } from 'react';
import invariant from 'invariant';
import { createStore, Store } from 'redux';

import { stillnessReducers, State } from './reducers';
import { StillnessManagerImpl, StillnessMonitorImpl } from './classes';
import { Action, StillnessManager, UniqueId } from '../types';
import { isUndefined } from '../utils';

function makeStoreInstance(debugMode: boolean): Store<State> {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  const reduxDevTools =
    typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(
    stillnessReducers,
    debugMode &&
      reduxDevTools &&
      reduxDevTools({
        name: 'react-stillness',
        instanceId: 'react-stillness',
      })
  );
}

export function createStillnessManager(
  globalContext: unknown = undefined,
  options: unknown = {},
  debugMode: boolean = false
): StillnessManager {
  const store = makeStoreInstance(debugMode);
  const monitor = new StillnessMonitorImpl(store);
  const manager = new StillnessManagerImpl(store, monitor);
  return manager;
}
