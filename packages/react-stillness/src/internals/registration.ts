import { StillnessManager, UniqueId, Unsubscribe } from '../types';
import { getStillnessUniqueId } from '../utils';

interface Params {
  id: UniqueId;
  groupId: UniqueId;
  parentId: UniqueId;
  visible: boolean;
  [key: string]: any;
}

export function register(
  params: Params,
  manager: StillnessManager
): [UniqueId, Unsubscribe] {
  const { createVNode, deleteVNode } = manager.getActions();
  const uniqueId = getStillnessUniqueId('uniqueId');
  createVNode({ uniqueId, ...params });

  return [uniqueId, () => manager.dispatch(deleteVNode({ id: params.id }))];
}
