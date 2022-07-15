import { Action, StillnessManager, MaxPayload } from '../../types';
import { operationTypes, rootId, NONE } from '../../constants';
import { getNodeIdsByCondition } from '../../utils/getNodes';

export const RESET_MAX = 'stillness/resetMax';
export const ADD_CACHE = 'stillness/addCache';
export const UPDATE_CACHE = 'stillness/updateCache';
export const REMOVE_CACHE = 'stillness/removeCache';

export function resetMax(manager: StillnessManager) {
  return (payload: MaxPayload): Action<MaxPayload> => {
    return {
      type: RESET_MAX,
      payload: {
        max: payload.max,
      },
    };
  };
}

export function createCache(manager: StillnessManager) {
  return (payload: MaxPayload): Action<MaxPayload> => {
    return {
      type: ADD_CACHE,
      payload: payload,
    };
  };
}

export function updateCache(manager: StillnessManager) {
  return function updateVNode(payload: MaxPayload): Action<MaxPayload> {
    return {
      type: UPDATE_CACHE,
      payload: payload,
    };
  };
}

export function removeCache(manager: StillnessManager) {
  return (payload: MaxPayload): Action<MaxPayload> => {
    return {
      type: REMOVE_CACHE,
      payload: payload,
    };
  };
}
