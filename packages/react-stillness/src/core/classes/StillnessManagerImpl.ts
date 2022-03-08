import invariant from 'invariant';

import { Store } from '../reducers';
import {
  addVNode,
  removeVNode,
  updateVNode,
  registerVNodeHandle,
} from '../actions';
import { isUndefined } from '../../utils';
import {
  StillnessManager,
  StillnessMonitor,
  StillnessActions,
  Action,
  UniqueId,
} from '../../types';

interface StillnessStore {
  state: Store;
  dispatch: React.Dispatch<Action<any>>;
}

export class StillnessManagerImpl implements StillnessManager {
  private store: StillnessStore;
  private monitor: StillnessMonitor;

  public constructor(store: StillnessStore, monitor: StillnessMonitor) {
    this.store = store;
    this.monitor = monitor;
  }

  public getStore(): Store {
    return this.store.state;
  }

  public getMonitor(): StillnessMonitor {
    return this.monitor;
  }

  public getActions(): StillnessActions {
    // 这里需要返回所有可执行的action,方便内部进行直接调用

    return {
      createStillnessVNode: (payload) => {
        invariant(
          isUndefined(this.store.state.vNodes[payload.id]),
          'The id must be unique.please check if the component id is duplicated'
        );

        if (this.store.state.vNodes[payload.id]) {
          return false;
        }

        this.store.dispatch(addVNode(payload));
      },
      updateStillnessVNode: (payload) => {
        this.store.dispatch(updateVNode(payload));
      },
      deleteStillnessVNode: (payload) => {
        this.store.dispatch(removeVNode(payload));
      },
      triggerMountQueue: (payload: { id: UniqueId }) => {},
      triggerUnmountQueue: (payload: { id: UniqueId }) => {},
      registerVNodeHandle: (payload: {
        id: UniqueId;
        handle: any;
        index?: number;
      }) => {
        this.store.dispatch(registerVNodeHandle(payload));

        return this.store.state.vNodes[payload.id].handleUnique.length;
      },
      unset: (payload: { id: UniqueId; groupId?: UniqueId }) => {},
      clear: () => {},
    };
  }

  public dispatch(action: Action<any>): void {
    this.store.dispatch(action);
  }
}
