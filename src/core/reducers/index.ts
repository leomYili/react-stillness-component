import { Action } from '../../types';
import { reduce as vNode, State as vNodeState } from './vNode';
import { reduce as max, State as maxState } from './max';

export interface State {
  /**
   * Record all stationary component base data
   */
  vNodes: vNodeState[];
  /**
   * Maximum number of components that can be stillness
   */
  max: maxState;
}

export function useStillnessReducers(
  state: State = {} as State,
  action: Action<any>
): State {
  return {
    vNodes: vNode(state.vNodes, action),
    max: max(state.max, action),
  };
}
