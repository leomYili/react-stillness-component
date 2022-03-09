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
      id: UniqueId;
      groupId: UniqueId;
    }
  ): Unsubscribe;

  /**
   * Returning true means the component is in the cached state
   * The default value is true
   */
  isStillness(id): boolean;

  getStillnessId(id): UniqueId | null;

  getStillnessGroupId(id): UniqueId | null;

  getStillnessItem(id, index): ResObject | null;
}
