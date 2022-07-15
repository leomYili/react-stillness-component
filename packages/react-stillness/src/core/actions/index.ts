import {
  createVNode,
  removeVNode,
  updateVNode,
  resetVNode,
} from './vNodeAction';
import {
  triggerMount,
  triggerUnmount,
  triggerUnset,
  triggerClear,
} from './operationAction';
import { resetMax, createCache, updateCache, removeCache } from './maxActions';
import { StillnessManager } from '../../types';
import { combineFuncs } from '../../utils';

export function createVNodeActions(manager: StillnessManager) {
  const actions = combineFuncs(
    {
      createVNode,
      removeVNode,
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
      triggerUnset,
      triggerClear,
    },
    manager
  );

  return actions;
}

export function createMaxActions(manager: StillnessManager) {
  const actions = combineFuncs(
    {
      resetMax,
      createCache,
      updateCache,
      removeCache,
    },
    manager
  );

  return actions;
}
