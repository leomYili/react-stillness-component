import { Identifier, UniqueId } from './core';

export interface StillnessMonitor<ResObject = unknown> {
  canStillness(): boolean;

  /**
   * Returning true means the component is in the cached state
   * The default value is true
   */
  isStillness(): boolean;

  getStillnessId(): Identifier | null;

  getStillnessGroupById(): Identifier | null;

  didMountStillness(): void;

  willUnMountStillness(): void;
}
