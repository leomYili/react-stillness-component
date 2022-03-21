import { StillnessContract } from './contract';

export interface StillnessHookSpec<CollectedProps, ResObject = any> {
  /**
   * optional
   * This event will be triggered after the component goes to rest
   * and if there is any return value, it will be returned in contract.getItem()
   * @param props
   * @param contract
   */
  mounted?: (contract: StillnessContract) => ResObject | void;
  /**
   * optional
   * This event will be triggered after the component leaves the resting state
   * and if there is any return value, it will be returned in contract.getItem()
   */
  unmounted?: (contract: StillnessContract) => ResObject | void;

  collect?: (contract: StillnessContract) => CollectedProps;
}

export type FactoryOrInstance<T> = T | (() => T)

export type StillnessHookCollector<CollectedProps> = (
  contract: StillnessContract
) => CollectedProps;
