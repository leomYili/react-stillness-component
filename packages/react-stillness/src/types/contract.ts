import { Identifier, UniqueId } from './core';
import { StillnessMonitor } from './monitors';

export interface StillnessContract {
  receiveId: (id: UniqueId) => void;
  receiveItem: (item: any) => void;

  getStillnessId(): UniqueId | null;

  getStillnessType(): UniqueId | null;

  unset(obj: { id?: UniqueId; type?: Identifier }): void;

  clear(): void;
}
