import { Identifier, UniqueId, Unsubscribe } from './core';
import { StillnessMonitor } from './monitors';

export interface RegistrationParams {
  parentId?: UniqueId;
  type?: Identifier;
  visible?: boolean;
  isStillness?: boolean;
}
export interface Registration {
  register: (params: RegistrationParams) => [UniqueId, Unsubscribe];
  update: (params: RegistrationParams) => void;
  getUniqueId: () => UniqueId;
}
