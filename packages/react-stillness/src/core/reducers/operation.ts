import {
  TRIGGER_MOUNT,
  TRIGGER_UNMOUNT,
  TRIGGER_CLEAR,
  TRIGGER_UNSET,
} from '../actions/operationAction';
import { Action, UniqueId } from '../../types';
import { operationTypes } from '../classes/constants';

export interface State {
  type: string | null;
  targetIds: UniqueId[];
  targetGroupIds: UniqueId[];
}

const initialState: State = {
  type: null,
  targetIds: [],
  targetGroupIds: [],
};

export function reduce(
  state: State = initialState,
  action: Action<any>
): State {
  switch (action.type) {
    case TRIGGER_MOUNT:
      return {
        ...state,
        type: operationTypes.MOUNT,
        targetIds: action.payload.targetIds,
      };
    case TRIGGER_UNMOUNT:
      return {
        ...state,
        type: operationTypes.UNMOUNT,
        targetIds: action.payload.targetIds,
      };
    case TRIGGER_UNSET:
      return {
        ...state,
        type: operationTypes.UNSET,
        targetIds: action.payload.targetIds,
        targetGroupIds: action.payload.targetGroupIds,
      };
    case TRIGGER_CLEAR:
      return {
        ...state,
        type: operationTypes.CLEAR,
        targetIds: [],
        targetGroupIds: [],
      };
    default:
      return state;
  }
}
