import { UniqueId, Action } from '../../types';
import { reduce as vNode, State as vNodeState } from './vNode';
import { reduce as max, State as maxState } from './max';
import { reduce as operation, State as Operation } from './operation';

export interface State {
  /**
   * Record all stationary component base data
   */
  vNodes: { [key: UniqueId]: vNodeState };
  /**
   * Maximum number of components that can be stillness
   */
  max: maxState;
  operation: Operation;
}

export function stillnessReducers(
  state: State = {} as State,
  action: Action<any>
): State {
  return {
    vNodes: vNode(state.vNodes, action),
    max: max(state.max, action),
    operation: operation(state.operation, action),
  };
}
