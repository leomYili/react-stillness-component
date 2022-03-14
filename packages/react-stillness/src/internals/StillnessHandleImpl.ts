import { RefObject } from 'react';
import {
  StillnessSpec,
  StillnessManager,
  StillnessContract,
  StillnessHandle,
} from '../types';

export class StillnessHandleImpl<Props, ResObject> implements StillnessHandle {
  private props: Props | null = null;
  private spec: StillnessSpec<Props, ResObject>;
  private manager: StillnessManager;
  private contract: StillnessContract;

  constructor(spec, manager, contract) {
    this.spec = spec;
    this.manager = manager;
    this.contract = contract;
  }

  public receiveProps(props: Props) {
    this.props = props;
  }

  public mount = () => {
    if (!this.props) {
      return;
    }

    const item = this.spec.mounted(this.props, this.contract);

    return item;
  };

  public unmount = () => {
    if (!this.props) {
      return;
    }

    const item = this.spec.unmounted(this.props, this.contract);

    return item;
  };
}
