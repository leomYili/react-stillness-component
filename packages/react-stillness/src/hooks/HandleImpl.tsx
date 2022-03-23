import { RefObject } from 'react';
import {
  StillnessHookSpec,
  StillnessManager,
  StillnessContract,
  Handle,
} from '../types';
import { isFunction } from '../utils';

export class HandleImpl<CollectedProps, ResObject> implements Handle {
  private spec: StillnessHookSpec<CollectedProps, ResObject>;
  private manager: StillnessManager;
  private contract: StillnessContract;

  constructor(
    spec: StillnessHookSpec<CollectedProps, ResObject>,
    manager: StillnessManager,
    contract: StillnessContract
  ) {
    this.spec = spec;
    this.manager = manager;
    this.contract = contract;
  }

  public mount = () => {
    let item;

    if(this.spec.mounted && isFunction(this.spec.mounted)){
      item = this.spec.mounted(this.contract);
    }

    return item;
  };

  public unmount = () => {
    let item;

    if (this.spec.unmounted && isFunction(this.spec.unmounted)) {
      item = this.spec.unmounted(this.contract);
    }

    return item;
  };
}
