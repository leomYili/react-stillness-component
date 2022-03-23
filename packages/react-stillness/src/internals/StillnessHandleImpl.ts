import { RefObject } from 'react';
import {
  StillnessSpec,
  StillnessManager,
  StillnessContract,
  StillnessHandle,
} from '../types';
import { isFunction } from '../utils';

export class StillnessHandleImpl<Props, ResObject> implements StillnessHandle {
  private props: Props | null = null;
  private spec: StillnessSpec<Props, ResObject>;
  private manager: StillnessManager;
  private contract: StillnessContract;

  constructor(
    spec: StillnessSpec<Props, ResObject>,
    manager: StillnessManager,
    contract: StillnessContract
  ) {
    this.spec = spec;
    this.manager = manager;
    this.contract = contract;
  }

  public receiveProps(props: Props) {
    this.props = props;
  }

  public mount = () => {
    let item;
    if (!this.props || !this.spec.mounted || !isFunction(this.spec.mounted)) {
      return item;
    }

    item = this.spec.mounted(this.props, this.contract);

    return item;
  };

  public unmount = () => {
    let item;
    if (!this.props || !this.spec.unmounted || !isFunction(this.spec.unmounted)) {
      return;
    }

    item = this.spec.unmounted(this.props, this.contract);

    return item;
  };
}
