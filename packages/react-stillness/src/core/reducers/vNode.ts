import { UniqueId, Action } from '../../types';
import { ADD_V_NODE, REMOVE_V_NODE, UPDATE_V_NODE } from '../actions';

export interface State {
  id: UniqueId;
  parentId: UniqueId;
  groupId: UniqueId;
  visible: boolean;
  handleUnique: any[];
  createdAt: string;
  updatedAt: string;
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
          createdAt: now,
          updatedAt: now,
        };
      }
      return { ...state };
    case UPDATE_V_NODE:
      if (state[payload.oldId]) {
        state[payload.id] = {
          ...state[payload.oldId],
          updatedAt: now,
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
