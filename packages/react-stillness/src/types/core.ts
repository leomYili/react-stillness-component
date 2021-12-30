import { Component } from 'react';

import { StillnessMonitor } from './monitors';

export type Identifier = string | symbol | number;
export type UniqueId = Identifier;

export interface StillnessActions {
  /**
   * This function will be triggered after the component has been cached
   */
  didMountStillness(): void;

  /**
   * This function will be triggered after the component has been uncached
   */
  willUnMountStillness(): void;
}

export interface StillnessManager {
  getStore(): void;
  getMonitor(): StillnessMonitor;
  getActions(): StillnessActions;
  dispatch(action: any): void;
}

export interface StillnessProviderProps<Context> {
  context?:Context,
  options?: {
    max: number | boolean | string;
  };
}

export interface StillnessContextType {
  stillnessManager: StillnessManager | undefined;
}

export interface StillComponent<Props> extends Component<Props> {
  getDecoratedComponentInstance(): Component<Props> | null;
}
export interface Action<Payload> {
	type: Identifier
	payload: Payload
}
