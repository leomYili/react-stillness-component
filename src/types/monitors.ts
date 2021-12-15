import { Identifier, UniqueId } from './core';

export interface StillnessMonitor<ResObject = unknown> {
  canStillness(): boolean;

  /**
   * Returning true means the component is in the cached state
   * The default value is true
   */
  isStillness(): boolean;

  getStillnessId(): UniqueId | null;

  getStillnessGroupById(): UniqueId | null;

  unset(obj: { id?: UniqueId; groupId?: UniqueId }): void;

  clear(): void;
}
