import { UniqueId, Action } from '../../types';
import { reduce as vNode, State as vNodeState } from './vNode';
import { reduce as max, State as maxState } from './max';

export interface Store {
  /**
   * Record all stationary component base data
   */
  vNodes: { [key: UniqueId]: vNodeState };
  /**
   * Maximum number of components that can be stillness
   */
  max: maxState;
}

export function stillnessReducers(
  state: Store = {} as Store,
  action: Action<any>
): Store {
  return {
    vNodes: vNode(state.vNodes, action),
    max: max(state.max, action),
  };
}
