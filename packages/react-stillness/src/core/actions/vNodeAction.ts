import { Action, VNodePayload } from '../../types';

export const ADD_V_NODE = 'stillness/addVNode';
export const REMOVE_V_NODE = 'stillness/removeVNode';
export const UPDATE_V_NODE = 'stillness/updateVNode';
export const REGISTER_V_NODE_HANDLE = 'stillness/registerVNodeHandle';

export function addVNode(payload: VNodePayload): Action<VNodePayload> {
  return {
    type: ADD_V_NODE,
    payload: payload,
  };
}

export function updateVNode(payload: VNodePayload): Action<VNodePayload> {
  return {
    type: UPDATE_V_NODE,
    payload: payload,
  };
}

export function removeVNode(payload: VNodePayload): Action<VNodePayload> {
  return {
    type: REMOVE_V_NODE,
    payload: payload,
  };
}

export function registerVNodeHandle(payload: VNodePayload): Action<VNodePayload> {
  return {
    type: REGISTER_V_NODE_HANDLE,
    payload: payload,
  };
}