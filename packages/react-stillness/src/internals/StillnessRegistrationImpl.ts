import {
  Identifier,
  Registration,
  StillnessManager,
  UniqueId,
  Unsubscribe,
} from '../types';
import { getStillnessUniqueId } from '../utils';

interface Params {
  id: UniqueId;
  groupId: UniqueId;
  parentId: UniqueId;
  visible: boolean;
  [key: string]: any;
}

export class StillnessRegistrationImpl implements Registration {
  private manager: StillnessManager;
  private uniqueId: UniqueId;

  constructor(manager: StillnessManager) {
    this.manager = manager;
    this.uniqueId = getStillnessUniqueId('uniqueId');
  }

  public register: (params: {
    parentId: Identifier;
    visible: boolean;
  }) => [UniqueId, Unsubscribe] = (params) => {
    const { createVNode, deleteVNode } = this.manager.getActions();
    createVNode({ uniqueId: this.uniqueId, ...params });

    return [this.uniqueId, () => deleteVNode({ uniqueId: this.uniqueId })];
  };

  public update = (params: any) => {
    this.manager
      .getActions()
      .updateVNode({ uniqueId: this.uniqueId, ...params });
  };

  public getUniqueId = () => this.uniqueId;
}
