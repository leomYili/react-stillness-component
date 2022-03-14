import { Identifier, UniqueId, Unsubscribe } from './core';
import { StillnessMonitor } from './monitors';

export interface Registration {
  register: (params: {
    parentId: UniqueId;
    visible: boolean;
  }) => [UniqueId, Unsubscribe];
  update: (params: any) => void;
  getUniqueId: () => UniqueId;
}
