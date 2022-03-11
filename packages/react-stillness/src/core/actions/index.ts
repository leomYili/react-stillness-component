import {
  createVNode,
  deleteVNode,
  updateVNodeIsStillness,
  resetVNode,
} from './vNodeAction';
import { StillnessManager } from '../../types';
import { combineFuncs } from '../../utils';

export function createVNodeActions(manager: StillnessManager) {
  const actions = combineFuncs(
    {
      createVNode,
      deleteVNode,
      updateVNodeIsStillness,
      resetVNode,
    },
    manager
  );

  return actions;
}
