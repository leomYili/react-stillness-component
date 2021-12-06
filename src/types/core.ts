import { Component } from 'react';

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
  getActions(): StillnessActions;
  dispatch(action: any): void;
}

export interface StillnessContextType {
  stillnessManager: StillnessManager | undefined;
}

export interface StillComponent<Props> extends Component<Props> {
  getDecoratedComponentInstance(): Component<Props> | null;
}
