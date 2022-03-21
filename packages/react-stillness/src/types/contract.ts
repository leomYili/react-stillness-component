import { Identifier, UniqueId } from './core';
import { StillnessMonitor } from './monitors';

export interface ActionsParams{
  id?: Identifier;
}

export interface UnsetParams {
  id?: Identifier;
  type?: Identifier;
}

export interface StillnessContract {
  getStillnessId(): UniqueId | null;

  getStillnessType(): UniqueId | null;

  unset(params: UnsetParams): void;

  clear(): void;
}

export interface HandlerContract {
  receiveId: (id: UniqueId) => void;
  receiveItem: (item: any) => void;
}