import { Component } from 'react';

import { StillnessMonitor } from './monitors';

export type Identifier = string | number;
export type UniqueId = Identifier;
export type Unsubscribe = () => void;
export type Listener = () => void;

export type ActionCreator<Payload> = (args: any[]) => Action<Payload>;

export type StillnessActions = VNodeActions & OperationActions;

export interface VNodeActions {
  createVNode: (payload) => void;
  deleteVNode: (payload) => void;
  updateVNodeIsStillness: (payload) => void;
  resetVNode: (payload) => void;
}

export interface OperationActions {
  updateOperation: (payload) => void;
}

export interface StillnessManager {
  getStore(): void;
  getMonitor(): StillnessMonitor;
  getActions(): StillnessActions;
  dispatch(action: any): void;
}

export interface StillnessProviderProps<Context> {
  context?: Context;
  options?: {
    max: number | boolean | string;
  };
  debugMode?: boolean;
}

export interface StillnessContextType {
  stillnessManager: StillnessManager | undefined;
}

export interface StillnessNodeProviderProps<Context> {
  context?: Context;
}

export interface StillnessNodeContextType {
  stillnessParentId: Identifier;
}

export interface StillComponent<Props> extends Component<Props> {
  getDecoratedComponentInstance(): Component<Props> | null;
}
export interface Action<Payload> {
  type: Identifier;
  payload: Payload;
}

export interface VNodePayload {
  uniqueId?: UniqueId;
  id: UniqueId;
  groupId?: Symbol | UniqueId;
  handle?: any;
}
