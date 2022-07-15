import { Action, VNodePayload, StillnessManager } from '../../types';

export const ADD_V_NODE = 'stillness/addVNode';
export const REMOVE_V_NODE = 'stillness/removeVNode';
export const RESET_V_NODE = 'stillness/resetVNode';
export const UPDATE_V_NODE = 'stillness/updateVNode';

export function createVNode(manager: StillnessManager) {
  return (payload: VNodePayload): Action<VNodePayload> => {
    return {
      type: ADD_V_NODE,
      payload: payload,
    };
  };
}

export function updateVNode(manager: StillnessManager) {
  return function updateVNode(payload: VNodePayload): Action<VNodePayload> {
    return {
      type: UPDATE_V_NODE,
      payload: payload,
    };
  };
}

export function removeVNode(manager: StillnessManager) {
  return (payload: VNodePayload): Action<VNodePayload> => {
    return {
      type: REMOVE_V_NODE,
      payload: payload,
    };
  };
}

export function resetVNode(manager: StillnessManager) {
  return (payload: VNodePayload): Action<VNodePayload> => {
    return {
      type: RESET_V_NODE,
      payload: payload,
    };
  };
}
