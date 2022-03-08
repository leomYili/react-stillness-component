import { useReducer } from 'react';
import invariant from 'invariant';

import { Store } from './reducers';
import { StillnessManagerImpl, StillnessMonitorImpl } from './classes';
import { Action, StillnessManager, UniqueId } from '../types';
import { isUndefined } from '../utils';
import { addVNode, removeVNode, updateVNode } from './actions';

export function createStillnessManager(
  store: {
    state: Store;
    dispatch: React.Dispatch<Action<any>>;
  },
  globalContext: unknown = undefined,
  options: unknown = {}
): StillnessManager {
  const monitor = new StillnessMonitorImpl(store);
  const manager = new StillnessManagerImpl(store, monitor);
  return manager;
}
