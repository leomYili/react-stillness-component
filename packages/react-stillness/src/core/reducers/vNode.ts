import {
  ADD_V_NODE,
  REMOVE_V_NODE,
  UPDATE_V_NODE_IS_STILLNESS,
  RESET_V_NODE,
} from '../actions/vNodeAction';
import { isUndefined, isFunction, getStillnessUniqueId } from '../../utils';
import { UniqueId, Action, Identifier } from '../../types';

export interface State {
  id: UniqueId;
  type: UniqueId;
  parentId: UniqueId;
  visible: boolean;
  handleUnique: any[];
}

export function reduce(
  state: { [key: UniqueId]: State } = {},
  action: Action<{
    uniqueId?: UniqueId;
    parentId: UniqueId;
    type: Identifier;
    visible: boolean;
    handleUnique: any[];
    handle: any;
  }>
): { [key: string]: State } {
  const { payload } = action;
  const { uniqueId, ...rest } = payload;
  const now = Date.now().toString();

  switch (action.type) {
    case ADD_V_NODE:
      state[payload.uniqueId] = {
        id: payload.uniqueId,
        type: payload.type,
        parentId: payload.parentId,
        visible: payload.visible,
        handleUnique: [],
      };
      return { ...state };
    case UPDATE_V_NODE_IS_STILLNESS:
      /* if (state[payload.oldId]) {
        state[payload.id] = {
          ...rest,
          visible: payload.visible,
        };
      } */

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
