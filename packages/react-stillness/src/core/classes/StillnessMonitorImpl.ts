import { StillnessMonitor, Identifier } from '../../types';

/**
 * 这里是真实调用
 */
export class StillnessMonitorImpl implements StillnessMonitor {
  private store: any;

  public constructor(store) {}
  isActive(): boolean {
    throw new Error('Method not implemented.');
  }

  public canStillness(): boolean {
    return false;
  }

  public isStillness(): boolean {
    return false;
  }

  public unset(obj: { id?: Identifier; groupId?: Identifier }): void {
    throw new Error('Method not implemented.');
  }

  public clear(): void {
    throw new Error('Method not implemented.');
  }
}
