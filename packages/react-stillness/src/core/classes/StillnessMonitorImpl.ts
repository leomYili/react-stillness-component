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
import { shallowEqual, isUndefined } from '../../utils';
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

    let prevType = this.store.getState().operation.type;
    let prevTargetIds = this.store.getState().operation.targetIds;
    const handleChange = () => {
      const store = this.store.getState();
      const currentTargetIds = store.operation.targetIds;
      const currentType = store.operation.type;

      try {
        const canSkipListener =
          !lifeCycleTypes.includes(currentType) ||
          (prevType === currentType &&
            shallowEqual(prevTargetIds, currentTargetIds)) ||
          !currentTargetIds.includes(parentId);

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
    params: { uniqueId: UniqueId; type?: Identifier }
  ): Unsubscribe {
    const { uniqueId, type } = params;
    invariant(!isUndefined(uniqueId), 'uniqueId is required');

    let prevType = this.store.getState().operation.type;
    let prevTargetIds = this.store.getState().operation.targetIds;
    let prevTargetType = this.store.getState().operation.targetType;
    const handleChange = () => {
      const store = this.store.getState();
      const currentType = store.operation.type;
      const currentTargetIds = store.operation.targetIds;
      const currentTargetType = store.operation.targetType;

      try {
        const canSkipListener =
          !effectTypes.includes(currentType) ||
          (prevType === currentType &&
            shallowEqual(prevTargetIds, currentTargetIds) &&
            prevTargetType === currentTargetType);

        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevType = currentType;
        prevTargetIds = currentTargetIds;
        prevTargetType = currentTargetType;
      }
    };

    return this.store.subscribe(handleChange);
  }

  public getStillnessItem(uniqueId: any) {
    return this.store.getState().vNodes[uniqueId];
  }

  public getStillnessId(uniqueId): Identifier {
    return this.store.getState().vNodes[uniqueId]?.id;
  }

  public getStillnessType(uniqueId): Identifier {
    return this.store.getState().vNodes[uniqueId]?.type;
  }

  public isStillness(uniqueId): boolean {
    return this.store.getState().vNodes[uniqueId]?.visible;
  }
}
