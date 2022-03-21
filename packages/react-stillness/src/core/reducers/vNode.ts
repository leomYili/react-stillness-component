import {
  ADD_V_NODE,
  REMOVE_V_NODE,
  RESET_V_NODE,
  UPDATE_V_NODE,
} from '../actions/vNodeAction';
import {} from '../../utils';
import { UniqueId, Action, Identifier } from '../../types';

export interface State {
  uniqueId: UniqueId;
  type?: UniqueId;
  parentId: UniqueId;
  visible?: boolean;
  isStillness?: boolean;
}

export function reduce(
  state: { [key: UniqueId]: State } = {},
  action: Action<{
    uniqueId?: UniqueId;
    parentId: UniqueId;
    type?: Identifier;
    visible?: boolean;
    isStillness?: boolean;
  }>
): { [key: string]: State } {
  const { payload } = action;

  switch (action.type) {
    case ADD_V_NODE:
      state[payload.uniqueId] = {
        ...payload,
        uniqueId: payload.uniqueId,
      };
      return { ...state };
    case UPDATE_V_NODE:
      if (state[payload.uniqueId]) {
        state[payload.uniqueId] = {
          ...state[payload.uniqueId],
          ...payload,
          uniqueId: payload.uniqueId,
        };
      }
      return { ...state };
    case RESET_V_NODE:
      /* if (!state[payload.id]) {
        state[payload.id] = {
          ...state[payload.oldId],
          ...rest,
        };

        if (payload.oldId !== payload.id) {
          delete state[payload.oldId];
        }
      } */
      return { ...state };
    case REMOVE_V_NODE:
      delete state[payload.uniqueId];

      return { ...state };
    default:
      return state;
  }
}
