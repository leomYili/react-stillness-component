import { Identifier, UniqueId } from './core';

export interface StillnessMonitor<ResObject = unknown> {
  /**
   * Returning true means the component is in the cached state
   * The default value is true
   */
  isStillness(id): boolean;

  getStillnessId(id): UniqueId | null;

  getStillnessGroupId(id): UniqueId | null;

  getStillnessItem(id, index): ResObject | null;
}
