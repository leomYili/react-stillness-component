import { StillnessMonitor, Identifier } from '../../types';
import { State } from '../reducers/vNode';

/**
 * 这里是真实调用
 */
export class StillnessMonitorImpl implements StillnessMonitor {
  private store: any;

  public constructor(store) {
    this.store = store;
  }

  public getStillnessItem(id: any, index: number): State {
    if (index >= 0) {
      return this.store.state.vNodes[id].item[index];
    }

    return null;
  }

  public getStillnessId(id): Identifier {
    return this.store.state.vNodes[id]?.id;
  }
  
  public getStillnessGroupId(id): Identifier {
    return this.store.state.vNodes[id]?.groupId;
  }

  public isStillness(id): boolean {
    return this.store.state.vNodes[id]?.visible;
  }
}
