import { Identifier, UniqueId } from './core';
import { StillnessMonitor } from './monitors';

export interface StillnessContract<ResObject = unknown>
  extends StillnessMonitor {
  getStillnessId(): UniqueId | null;

  getStillnessGroupId(): UniqueId | null;

  unset(obj: { id?: UniqueId; groupId?: UniqueId }): void;

  clear(): void;
}
