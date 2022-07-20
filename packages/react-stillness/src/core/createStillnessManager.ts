import { createStore, Store } from 'redux';

import { stillnessReducers, State } from './reducers';
import { StillnessManagerImpl, StillnessMonitorImpl } from './classes';
import { StillnessManager, ProviderOptions } from '../types';
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

export const INSTANCE_SYM = '__REACT_STILLNESS_CONTEXT_INSTANCE__';

export function getGlobalContext() {
  return typeof global !== 'undefined' ? global : (window as any);
}

export function createStillnessManager(
  globalContext: unknown = getGlobalContext(),
  options: ProviderOptions = { max: -1 },
  debugMode: boolean = false
): StillnessManager {
  const ctx = globalContext as any;

  if (!ctx[INSTANCE_SYM]) {
    const store = makeStoreInstance(debugMode);
    const monitor = new StillnessMonitorImpl(store);
    const manager = new StillnessManagerImpl(store, monitor, options);

    ctx[INSTANCE_SYM] = {
      stillnessManager: manager,
    };
  }

  if (!isUndefined(options) && options?.max) {
    // 进行初始化,重置store
    ctx[INSTANCE_SYM].stillnessManager.getActions().resetMax({ max: options.max });
  }

  return ctx[INSTANCE_SYM].stillnessManager;
}
