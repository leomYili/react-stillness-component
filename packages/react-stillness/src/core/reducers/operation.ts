import {
  TRIGGER_MOUNT,
  TRIGGER_UNMOUNT,
  TRIGGER_CLEAR,
  TRIGGER_UNSET,
} from '../actions/operationAction';
import { Action, UniqueId, OperationTypes } from '../../types';
import { NONE, operationTypes } from '../../constants';
import { getNowTimeStr } from '../../utils';

export interface State {
  type: OperationTypes;
  targetIds: UniqueId[];
  targetType: string | null;
  now: string;
}

const initialState: State = {
  type: null,
  targetIds: [],
  targetType: null,
  now: getNowTimeStr(),
};

export function reduce(
  state: State = initialState,
  action: Action<any>
): State {
  switch (action.type) {
    case TRIGGER_MOUNT:
      return {
        ...state,
        type: operationTypes.MOUNT as OperationTypes,
        targetIds: action.payload.targetIds,
        now: getNowTimeStr(),
      };
    case TRIGGER_UNMOUNT:
      return {
        ...state,
        type: operationTypes.UNMOUNT as OperationTypes,
        targetIds: action.payload.targetIds,
        now: getNowTimeStr(),
      };
    case TRIGGER_UNSET:
      return {
        ...state,
        type: operationTypes.UNSET as OperationTypes,
        targetIds: action.payload.targetIds,
        targetType: action.payload.targetType,
        now: getNowTimeStr(),
      };
    case TRIGGER_CLEAR:
      return {
        ...state,
        type: operationTypes.CLEAR as OperationTypes,
        targetIds: action.payload.targetIds,
        targetType: null,
        now: getNowTimeStr(),
      };
    case NONE:
    default:
      return state;
  }
}
