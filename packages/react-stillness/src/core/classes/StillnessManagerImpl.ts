import {
  StillnessManager,
  StillnessMonitor,
  StillnessActions,
} from '../../types';

export class StillnessManagerImpl implements StillnessManager {
  private store: any;
  private monitor: StillnessMonitor;
  private isInit = false;

  public constructor(store: any, monitor: StillnessMonitor) {
    this.store = store;
    this.monitor = monitor;
  }

  public getStore(): any {
    return this.store;
  }

  public getMonitor(): StillnessMonitor {
    return this.monitor;
  }

  public getActions(): StillnessActions {
    // 这里需要返回所有可执行的action,方便内部进行直接调用

    return {} as any;
  }

  public dispatch(action): void {
    this.store.dispatch(action);
  }
}
