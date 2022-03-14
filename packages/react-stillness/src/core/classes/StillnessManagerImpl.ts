import invariant from 'invariant';
import { Store, Action } from 'redux';

import { State } from '../reducers';
import { createVNodeActions, createOperationActions } from '../actions';
import { isUndefined } from '../../utils';
import {
  StillnessManager,
  StillnessMonitor,
  StillnessActions,
  VNodeActions,
  UniqueId,
  ActionCreator,
} from '../../types';

interface StillnessStore {
  state: State;
  dispatch: React.Dispatch<Action<any>>;
}

export class StillnessManagerImpl implements StillnessManager {
  private store: Store<State>;
  private monitor: StillnessMonitor;

  public constructor(store: Store<State>, monitor: StillnessMonitor) {
    this.store = store;
    this.monitor = monitor;
  }

  public getStore(): State {
    return this.store.getState();
  }

  public getMonitor(): StillnessMonitor {
    return this.monitor;
  }

  public getActions(): StillnessActions {
    // 这里需要返回所有可执行的action,方便内部进行直接调用
    const manager = this;

    const { dispatch } = this.store;

    function bindActionCreator(actionCreator: ActionCreator<any>) {
      return (...args: any[]) => {
        const action = actionCreator.apply(manager, args as any);
        if (typeof action !== 'undefined') {
          dispatch(action);
        }
      };
    }

    const actions = {
      ...createVNodeActions(this),
      ...createOperationActions(this),
    };

    return Object.keys(actions).reduce(
      (boundActions: StillnessActions, key: string) => {
        const action: ActionCreator<any> = (actions as any)[
          key
        ] as ActionCreator<any>;
        (boundActions as any)[key] = bindActionCreator(action);
        return boundActions;
      },
      {} as StillnessActions
    );
  }

  public dispatch(action: Action<any>): void {
    this.store.dispatch(action);
  }
}
