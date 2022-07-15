import { Action, UniqueId, MaxPayload } from '../../types';
import {
  RESET_MAX,
  ADD_CACHE,
  UPDATE_CACHE,
  REMOVE_CACHE,
} from '../actions/maxActions';

export interface State {
  capacity: number | boolean;
  caches: UniqueId[];
}

const initialState: State = {
  capacity: -1,
  caches: [],
};

export function reduce(
  state: State = initialState,
  action: Action<{
    max?: number | boolean;
    cacheId: UniqueId;
  }>
): State {
  const { payload } = action;

  switch (action.type) {
    case RESET_MAX:
      if (payload.max) {
        state.capacity = payload.max;
      }

      return { ...state };
    case ADD_CACHE:
      if (payload.cacheId) {
        state.caches.push(payload.cacheId);
      }
      return { ...state };
    case UPDATE_CACHE:
      if (state.caches.length) {
        const index = state.caches.indexOf(payload.cacheId);
        if (index > -1) {
          state.caches.splice(index, 1);
        }

        state.caches.push(payload.cacheId);
      }

      return { ...state };
    case REMOVE_CACHE:
      state.caches.shift();
      return { ...state };
    default:
      return state;
  }
}
