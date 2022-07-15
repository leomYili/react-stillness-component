import { Component } from 'react';

import { StillnessMonitor } from './monitors';
import { UnsetParams, ActionsParams } from './contract';
import { State } from '../core/reducers';

export type Identifier = string | number;
export type UniqueId = Identifier;
export type Unsubscribe = () => void;
export type Listener = () => void;

export type ActionCreator<Payload> = (args: any[]) => Action<Payload>;

export type StillnessActions = VNodeActions & OperationActions & MaxActions;

export type OperationTypes = 'MOUNT' | 'UNMOUNT' | 'UNSET' | 'CLEAR' | null;

export interface VNodeActions {
  createVNode: (payload: VNodePayload) => void;
  removeVNode: (payload: VNodePayload) => void;
  updateVNode: (payload: VNodePayload) => void;
  resetVNode: (payload: VNodePayload) => void;
}

export interface OperationActions {
  triggerMount: (params: ActionsParams) => void;
  triggerUnmount: (params: ActionsParams) => void;
  triggerUnset: (params: UnsetParams) => void;
  triggerClear: () => void;
}

export interface MaxActions {
  resetMax: (payload: MaxPayload) => void;
  createCache: (payload: MaxPayload) => void;
  removeCache: (payload: MaxPayload) => void;
  updateCache: (payload: MaxPayload) => void;
}

export interface StillnessManager {
  getStore(): State;
  getMonitor(): StillnessMonitor;
  getActions(): StillnessActions;
  dispatch(action: any): void;
}

export interface ProviderOptions {
  max: number;
}

export interface StillnessProviderProps<Context> {
  context?: Context;
  options?: ProviderOptions;
  debugMode?: boolean;
}

export interface StillnessContextType {
  stillnessManager: StillnessManager | undefined;
}

export interface StillnessNodeProviderProps<Context> {
  context?: Context;
}

export interface StillnessNodeContextType {
  stillnessParentId: Identifier | undefined;
}

export interface StillComponent<Props> extends Component<Props> {
  getDecoratedComponentInstance(): Component<Props> | null;
}
export interface Action<Payload> {
  type: Identifier;
  payload: Payload;
}

export interface VNodePayload {
  uniqueId: UniqueId;
  parentId?: UniqueId;
  type?: Identifier;
  visible?: boolean;
  isStillness?: boolean;
  childQueue?: UniqueId[];
}

export interface OperationPayload {
  type: OperationTypes;
  targetIds: UniqueId[];
  targetType?: Identifier;
}

export interface MaxPayload {
  max?: number | boolean;
  cacheId?: UniqueId;
}
