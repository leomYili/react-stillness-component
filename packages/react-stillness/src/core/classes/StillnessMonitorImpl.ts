import { Store } from 'redux';
import invariant from 'invariant';
import {
  StillnessMonitor,
  Identifier,
  Unsubscribe,
  Listener,
  UniqueId,
} from '../../types';
import { State } from '../reducers';
import { intersection } from '../../utils';
import { operationTypes, lifeCycleTypes, effectTypes } from './constants';

/**
 * 这里是真实调用
 */
export class StillnessMonitorImpl implements StillnessMonitor {
  private store: Store<State>;

  public constructor(store) {
    this.store = store;
  }

  /**
   *
   * @param listener
   * @param params
   * @returns
   */
  public subscribeToStateChange(
    listener: Listener,
    params: { parentId: UniqueId }
  ): Unsubscribe {
    const { parentId } = params;
    invariant(typeof listener === 'function', 'listener must be a function.');
    invariant(typeof parentId === 'string', 'parentId is required');

    let prevTargetIds = this.store.getState().operation.targetIds;
    let prevType = this.store.getState().operation.type;
    const handleChange = () => {
      const store = this.store.getState();
      const currentTargetIds = store.operation.targetIds;
      const currentType = store.operation.type;

      try {
        const canSkipListener =
          !lifeCycleTypes.includes(currentType) ||
          (prevType === currentType &&
            intersection(prevTargetIds, currentTargetIds).length === 0);

        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevTargetIds = currentTargetIds;
        prevType = currentType;
      }
    };

    return this.store.subscribe(handleChange);
  }

  public subscribeToEffectChange(
    listener: Listener,
    params: { id: UniqueId; groupId: UniqueId }
  ): Unsubscribe {
    const { id, groupId } = params;
    invariant(
      typeof id === 'undefined' || typeof groupId === 'undefined',
      'id adn groupId is required'
    );

    let prevType = this.store.getState().operation.type;
    let prevTargetIds = this.store.getState().operation.targetIds;
    let prevTargetGroupIds = this.store.getState().operation.targetGroupIds;
    const handleChange = () => {
      const store = this.store.getState();
      const currentTargetIds = store.operation.targetIds;
      const currentTargetGroupIds = store.operation.targetGroupIds;
      const currentType = store.operation.type;

      try {
        const canSkipListener =
          !effectTypes.includes(currentType) ||
          (prevType === currentType &&
            intersection(prevTargetIds, currentTargetIds).length === 0 &&
            intersection(prevTargetGroupIds, currentTargetGroupIds).length ===
              0);

        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevTargetIds = currentTargetIds;
        prevTargetGroupIds = currentTargetGroupIds;
        prevType = currentType;
      }
    };

    return this.store.subscribe(handleChange);
  }

  public getStillnessItem(id: any, index: number) {
    if (index >= 0) {
      return this.store.getState().vNodes[id];
    }

    return null;
  }

  public getStillnessId(id): Identifier {
    return this.store.getState().vNodes[id]?.id;
  }

  public getStillnessGroupId(id): Identifier {
    return this.store.getState().vNodes[id]?.groupId;
  }

  public isStillness(id): boolean {
    return this.store.getState().vNodes[id]?.visible;
  }
}
