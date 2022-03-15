import { Identifier, UniqueId, Unsubscribe } from './core';
import { StillnessMonitor } from './monitors';

interface Params {
  parentId?: UniqueId;
  type?: Identifier;
  visible?: boolean;
  isStillness?: boolean;
}
export interface Registration {
  register: (params: Params) => [UniqueId, Unsubscribe];
  update: (params: Params) => void;
  getUniqueId: () => UniqueId;
}
