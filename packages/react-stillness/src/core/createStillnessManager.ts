import { useReducer } from 'react';
import invariant from 'invariant';

import { Store } from './reducers';
import { Action, StillnessManager,UniqueId } from '../types';
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
  return {
    getStore: () => {
      return store.state;
    },
    getActions: () => {
      return {
        createStillnessVNode: (payload) => {
          invariant(
            isUndefined(store.state.vNodes[payload?.id]),
            'The id must be unique.please check if the component id is duplicated'
          );
          if (store.state.vNodes[payload?.id]) {
            return false;
          }

          store.dispatch(addVNode(payload));
        },
        updateStillnessVNode: (payload) => {
          store.dispatch(updateVNode(payload));
        },
        deleteStillnessVNode: (payload) => {
          store.dispatch(removeVNode(payload));
        },
      };
    },
    getMonitor: () => {
      return {
        triggerMountQueue:(id:UniqueId) =>{

        },
        triggerUnmountQueue:(id:UniqueId) =>{
          
        }
      } as any;
    },
    dispatch: (action: Action<any>): void => {
      store.dispatch(action);
    },
  };
}
