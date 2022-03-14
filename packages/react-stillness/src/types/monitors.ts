import { Identifier, UniqueId, Listener, Unsubscribe } from './core';

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

  getStillnessItem(uniqueId): ResObject | null;
}
