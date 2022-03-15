import {
  Identifier,
  StillnessMonitor,
  StillnessActions,
  StillnessContract,
  StillnessManager,
  Listener,
  Unsubscribe,
  UnsetParams,
} from '../types';
import { isUndefined } from '../utils';

export class StillnessContractImpl implements StillnessContract {
  private internalMonitor: StillnessMonitor;
  private internalActions: StillnessActions;
  private id: Identifier = null;
  private item: any;

  public constructor(manager: StillnessManager) {
    this.internalMonitor = manager.getMonitor();
    this.internalActions = manager.getActions();
  }

  public receiveId(id: Identifier | null): void {
    this.id = id;
  }

  public receiveItem(item: any): void {
    this.item = item;
  }

  public isStillness(): boolean {
    return this.internalMonitor.isStillness(this.id);
  }
  public getStillnessId(): Identifier {
    return this.id;
  }
  public getStillnessType(): Identifier {
    return this.internalMonitor.getStillnessType(this.id);
  }
  public getStillnessItem() {
    return this.item;
  }
  public unset(params: UnsetParams): void {
    this.internalActions.triggerUnset(params);
  }
  public clear(): void {
    this.internalActions.triggerClear();
  }
}
