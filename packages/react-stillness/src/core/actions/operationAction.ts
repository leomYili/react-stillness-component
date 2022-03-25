import {
  Action,
  OperationPayload,
  ActionsParams,
  UnsetParams,
  StillnessManager,
  OperationTypes,
  Identifier,
} from '../../types';
import { State as OperationState } from '../reducers/operation';
import { operationTypes, rootId, NONE } from '../../constants';
import { getNodeIdsByCondition } from '../../utils/getNodes';

export const TRIGGER_MOUNT = 'stillness/triggerMount';
export const TRIGGER_UNMOUNT = 'stillness/triggerUnmount';
export const TRIGGER_UNSET = 'stillness/triggerUnset';
export const TRIGGER_CLEAR = 'stillness/triggerClear';

function isEventExist(prev: OperationState, next: OperationState) {
  if (
    prev.type === next.type &&
    next.targetIds.every((val) => prev.targetIds.includes(val))
  ) {
    return true;
  }

  return false;
}

// add judgment conditions to remove repeated response events triggered by child components
export function triggerMount(manager: StillnessManager) {
  return (params: ActionsParams): Action<any> => {
    const store = manager.getStore();
    const { id } = params;

    const targetIds = getNodeIdsByCondition({ nodes: store.vNodes, id });

    if (
      store.operation.targetIds.includes(id as Identifier) &&
      isEventExist(store.operation, {
        type: operationTypes.MOUNT,
        targetIds,
      } as OperationState)
    ) {
      return { type: NONE, payload: null };
    }

    return {
      type: TRIGGER_MOUNT,
      payload: {
        type: operationTypes.MOUNT,
        targetIds,
      },
    };
  };
}

// add judgment conditions to remove repeated response events triggered by child components
export function triggerUnmount(manager: StillnessManager) {
  return (params: ActionsParams): Action<any> => {
    const store = manager.getStore();
    const { id } = params;

    const targetIds = getNodeIdsByCondition({ nodes: store.vNodes, id });

    if (
      store.operation.targetIds.includes(id as Identifier) &&
      isEventExist(store.operation, {
        type: operationTypes.UNMOUNT,
        targetIds,
      } as OperationState)
    ) {
      return { type: NONE, payload: null };
    }

    return {
      type: TRIGGER_UNMOUNT,
      payload: {
        type: operationTypes.UNMOUNT,
        targetIds,
      },
    };
  };
}

export function triggerUnset(manager: StillnessManager) {
  return (params: UnsetParams): Action<any> => {
    const store = manager.getStore();
    const { id, type } = params;

    const targetIds = getNodeIdsByCondition({ nodes: store.vNodes, id, type });

    return {
      type: TRIGGER_UNSET,
      payload: {
        type: operationTypes.UNSET,
        targetIds,
        targetType: params?.type,
      },
    };
  };
}

export function triggerClear(manager: StillnessManager) {
  return (payload: OperationPayload): Action<any> => {
    const store = manager.getStore();
    const targetIds = getNodeIdsByCondition({
      nodes: store.vNodes,
      id: rootId,
    });

    return {
      type: TRIGGER_CLEAR,
      payload: {
        ...payload,
        type: operationTypes.CLEAR,
        targetIds,
      },
    };
  };
}
