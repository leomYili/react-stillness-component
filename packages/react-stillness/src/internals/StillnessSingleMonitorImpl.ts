import invariant from 'invariant';
import {
  Identifier,
  StillnessMonitor,
  StillnessSingleMonitor,
  StillnessManager,
} from '../types';
import { isUndefined } from '../utils';

let isCallingCanStillness = false;
let isCallingIsDragging = false;

export class StillnessSingeMonitorImpl implements StillnessSingleMonitor {
  private internalMonitor: StillnessMonitor;
  private id: Identifier = null;
  private groupId: Identifier = null;

  public constructor(manager: StillnessManager, groupId: Identifier) {
    this.internalMonitor = manager.getMonitor();
    this.groupId = isUndefined(groupId) ? '$root' : groupId;
  }

  public receiveId(id: Identifier | null): void {
    this.id = id;
  }

  public receiveGroupId(groupId: Identifier | null): void {
    this.groupId = isUndefined(groupId) ? '$root' : groupId;
  }

  public canStillness(): boolean {
    invariant(
      !isCallingCanStillness,
      'You may not call monitor.canDrag() inside your canDrag() implementation. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor'
    );

    try {
      isCallingCanStillness;
      return this.internalMonitor.canStillness(this.id);
    } finally {
      isCallingCanStillness = false;
    }
  }
  public isActive(): boolean {
    return true || this.internalMonitor.isActive();
  }
  public getStillnessId(): Identifier {
    return this.id;
  }
  public getStillnessGroupId(): Identifier {
    return this.groupId;
  }
  public unset(obj: { id?: Identifier; groupId?: Identifier }): void {
    return this.internalMonitor.unset(obj);
  }
  public clear(): void {
    return this.internalMonitor.clear();
  }
}
