import { Identifier, UniqueId } from './core';

export interface StillnessMonitor<ResObject = unknown> {
  canStillness(id: Identifier): boolean;

  /**
   * Returning true means the component is in the cached state
   * The default value is true
   */
  isActive(): boolean;

  unset(obj: { id?: UniqueId; groupId?: UniqueId }): void;

  clear(): void;
}

export interface StillnessSingleMonitor<ResObject = unknown>
  extends StillnessMonitor {
  getStillnessId(): UniqueId | null;

  getStillnessGroupId(): UniqueId | null;
}
