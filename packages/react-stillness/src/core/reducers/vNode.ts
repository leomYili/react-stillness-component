import {
  ADD_V_NODE,
  REMOVE_V_NODE,
  UPDATE_V_NODE_IS_STILLNESS,
  RESET_V_NODE,
} from '../actions/vNodeAction';
import { isFunction } from '../../utils';
import { UniqueId, Action } from '../../types';

export interface State {
  id: UniqueId;
  parentId: UniqueId;
  groupId: UniqueId;
  visible: boolean;
  handleUnique: any[];
}

export function reduce(
  state: { [key: UniqueId]: State } = {},
  action: Action<{
    oldId?: UniqueId;
    id: UniqueId;
    parentId: UniqueId;
    groupId: UniqueId;
    visible: boolean;
    handleUnique: any[];
    handle: any;
  }>
): { [key: string]: State } {
  const { payload } = action;
  const { oldId, ...rest } = payload;
  const now = Date.now().toString();

  switch (action.type) {
    case ADD_V_NODE:
      if (!state[payload.id]) {
        state[payload.id] = {
          id: payload.id,
          parentId: payload.parentId,
          groupId: payload.groupId,
          visible: payload.visible,
          handleUnique: [],
        };
      }
      return { ...state };
    case UPDATE_V_NODE_IS_STILLNESS:
      if (state[payload.oldId]) {
        state[payload.id] = {
          ...rest,
          visible: payload.visible,
        };
      }

      return { ...state };
    case RESET_V_NODE:
      if (!state[payload.id]) {
        state[payload.id] = {
          ...state[payload.oldId],
          ...rest,
        };

        if (payload.oldId !== payload.id) {
          delete state[payload.oldId];
        }
      }
      return { ...state };
    case REMOVE_V_NODE:
      delete state[payload.id];

      return { ...state };
    default:
      return state;
  }
}
