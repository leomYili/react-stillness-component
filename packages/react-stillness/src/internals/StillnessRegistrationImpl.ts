import {
  Identifier,
  Registration,
  StillnessManager,
  UniqueId,
  Unsubscribe,
  RegistrationParams,
} from '../types';
import { getStillnessUniqueId } from '../utils';

export class StillnessRegistrationImpl implements Registration {
  private manager: StillnessManager;
  private uniqueId: UniqueId;

  constructor(manager: StillnessManager) {
    this.manager = manager;
    this.uniqueId = getStillnessUniqueId('uniqueId').toString();
  }

  public register: (params: RegistrationParams) => [UniqueId, Unsubscribe] = (
    params: RegistrationParams
  ) => {
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

  public update = (params: RegistrationParams) => {
    const { parentId, type, visible, isStillness } = params;

    this.manager.getActions().updateVNode({
      uniqueId: this.uniqueId,
      parentId,
      type,
      visible,
      isStillness,
      childQueue: [],
    });
  };

  public getUniqueId = () => this.uniqueId;
}
