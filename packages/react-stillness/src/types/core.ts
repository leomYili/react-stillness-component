import { Component } from 'react';

import { StillnessMonitor } from './monitors';

export type Identifier = string | number;
export type UniqueId = Identifier;

export interface StillnessActions {
  createStillnessVNode({ id, parentId, groupId, visible }): any;

  updateStillnessVNode({ oldId, id, groupId, visible }): any;

  /**
   * This function will be triggered after the component has been uncached
   */
  deleteStillnessVNode(id): any;
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
  oldId?: UniqueId;
  collect?: any;
  id: UniqueId;
  groupId: Symbol | UniqueId;
}
