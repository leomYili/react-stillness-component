import {
  Identifier,
  StillnessMonitor,
  StillnessActions,
  StillnessContract,
  StillnessManager,
  UniqueId,
  UnsetParams,
} from '../types';
import { isUndefined } from '../utils';

export class StillnessContractImpl implements StillnessContract {
  private internalMonitor: StillnessMonitor;
  private internalActions: StillnessActions;
  private id: UniqueId | undefined;
  private item: any;

  public constructor(manager: StillnessManager) {
    this.internalMonitor = manager.getMonitor();
    this.internalActions = manager.getActions();
  }

  public receiveId(id: UniqueId | undefined): void {
    this.id = id;
  }

  public receiveItem(item: any): void {
    this.item = item;
  }

  public isStillness = (): boolean => {
    return this.internalMonitor.isStillness(this.id);
  };
  public getStillnessId = (): UniqueId | undefined => {
    return this.id;
  };
  public getStillnessType = (): Identifier | undefined => {
    return this.internalMonitor.getStillnessType(this.id);
  };
  public getStillnessItem = () => {
    return this.item;
  };
  public unset = (params: UnsetParams): void => {
    this.internalActions.triggerUnset(params);
  };
  public clear = (): void => {
    this.internalActions.triggerClear();
  };
  public resetMax = (max: number): void => {
    this.internalActions.resetMax({ max });
  };
}
