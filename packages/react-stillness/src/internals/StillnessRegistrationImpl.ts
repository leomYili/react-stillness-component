import {
  Identifier,
  Registration,
  StillnessManager,
  UniqueId,
  Unsubscribe,
} from '../types';
import { getStillnessUniqueId } from '../utils';

export class StillnessRegistrationImpl implements Registration {
  private manager: StillnessManager;
  private uniqueId: UniqueId;

  constructor(manager: StillnessManager) {
    this.manager = manager;
    this.uniqueId = getStillnessUniqueId('uniqueId').toString();
  }

  public register: (params) => [UniqueId, Unsubscribe] = (params) => {
    const { createVNode, deleteVNode } = this.manager.getActions();
    const { parentId, type, visible, isStillness } = params;
    createVNode({
      uniqueId: this.uniqueId,
      parentId,
      type,
      visible,
      isStillness,
    });

    return [this.uniqueId, () => deleteVNode({ uniqueId: this.uniqueId })];
  };

  public update = (params) => {
    const { parentId, type, visible, isStillness } = params;

    this.manager.getActions().updateVNode({
      uniqueId: this.uniqueId,
      parentId,
      type,
      visible,
      isStillness,
    });
  };

  public getUniqueId = () => this.uniqueId;
}
