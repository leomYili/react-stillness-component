import {
  createVNode,
  deleteVNode,
  updateVNode,
  resetVNode,
} from './vNodeAction';
import { triggerMount, triggerUnmount } from './operationAction';
import { StillnessManager } from '../../types';
import { combineFuncs } from '../../utils';

export function createVNodeActions(manager: StillnessManager) {
  const actions = combineFuncs(
    {
      createVNode,
      deleteVNode,
      updateVNode,
      resetVNode,
    },
    manager
  );

  return actions;
}

export function createOperationActions(manager: StillnessManager) {
  const actions = combineFuncs(
    {
      triggerMount,
      triggerUnmount,
    },
    manager
  );

  return actions;
}
