import { Identifier, UniqueId, Listener, Unsubscribe } from './core';
import { State as VNodeState } from '../core/reducers/vNode';

export interface StillnessMonitor<ResObject = unknown> {
  subscribeToStateChange(
    listener: Listener,
    params: {
      parentId: UniqueId;
    }
  ): Unsubscribe;

  subscribeToEffectChange(
    listener: Listener,
    params: {
      uniqueId: UniqueId;
      type: Identifier;
    }
  ): Unsubscribe;

  /**
   * Returning true means the component is in the cached state
   * The default value is true
   */
  isStillness(uniqueId): boolean;

  getStillnessId(uniqueId): UniqueId | null;

  getStillnessType(uniqueId): UniqueId | null;

  getStillnessItem(uniqueId): VNodeState;
}
