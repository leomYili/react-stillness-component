import { Identifier, UniqueId } from './core';
import { StillnessMonitor } from './monitors';

export interface ActionsParams {
  id?: Identifier;
}

export interface UnsetParams {
  id?: Identifier;
  type?: Identifier;
}

export interface StillnessContract {
  getStillnessId(): UniqueId | undefined;

  getStillnessItem(): any;

  getStillnessType(): Identifier | undefined;

  isStillness(): boolean;

  unset(params: UnsetParams): void;

  clear(): void;

  resetMax(max: number): void;
}

export interface HandlerContract {
  receiveId: (id: UniqueId | undefined) => void;
  receiveItem: (item: any) => void;
}
