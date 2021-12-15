import { StillnessMonitor, Identifier } from '../../types';

export class StillnessMonitorImpl implements StillnessMonitor {
  private store: any;

  public constructor(store) {}

  public canStillness(): boolean {
    return false;
  }

  public isStillness(): boolean {
    return false;
  }

  public getStillnessId(): Identifier {
    return 'xxx';
  }

  public getStillnessGroupById(): Identifier {
    return 'XXX';
  }
}
