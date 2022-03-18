import { RefObject } from 'react';
import {
  StillnessHookSpec,
  StillnessManager,
  StillnessContract,
  Handle,
} from '../types';

export class HandleImpl<CollectedProps, ResObject> implements Handle {
  private spec: StillnessHookSpec<CollectedProps, ResObject>;
  private manager: StillnessManager;
  private contract: StillnessContract;

  constructor(spec, manager, contract) {
    this.spec = spec;
    this.manager = manager;
    this.contract = contract;
  }

  public mount = () => {
    const item = this.spec.mounted(this.contract);

    return item;
  };

  public unmount = () => {
    const item = this.spec.unmounted(this.contract);

    return item;
  };
}
