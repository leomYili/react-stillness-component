import invariant from 'invariant';
import {
  Identifier,
  StillnessMonitor,
  StillnessActions,
  StillnessContract,
  StillnessManager,
} from '../types';
import { isUndefined } from '../utils';

export class StillnessContractImpl implements StillnessContract {
  private internalMonitor: StillnessMonitor;
  private internalActions: StillnessActions;
  private id: Identifier = null;
  private index: number = null;

  public constructor(manager: StillnessManager) {
    this.internalMonitor = manager.getMonitor();
    this.internalActions = manager.getActions();
  }

  public receiveId(id: Identifier | null): void {
    this.id = id;
  }

  public receiveIndex(index: number): void {
    this.index = index;
  }

  public isStillness(): boolean {
    return this.internalMonitor.isStillness(this.id);
  }
  public getStillnessId(): Identifier {
    return this.id;
  }
  public getStillnessGroupId(): Identifier {
    return this.internalMonitor.getStillnessGroupId(this.id);
  }
  public getStillnessItem() {
    return this.internalMonitor.getStillnessItem(this.id, this.index);
  }
  public unset(obj: { id?: Identifier; groupId?: Identifier }): void {
    //return this.internalMonitor.unset(obj);
  }
  public clear(): void {
    //return this.internalMonitor.clear();
  }
}
