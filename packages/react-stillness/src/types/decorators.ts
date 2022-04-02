import { StillnessContract } from './contract';

export interface StillnessSpec<Props, ResObject = any> {
  /**
   * optional
   * This event will be triggered after the component goes to rest
   * and if there is any return value, it will be returned in contract.getItem()
   * @param props
   * @param contract
   */
  mounted?: (props: Props, contract: StillnessContract) => ResObject | void;
  /**
   * optional
   * This event will be triggered after the component leaves the resting state
   * and if there is any return value, it will be returned in contract.getItem()
   */
  unmounted?: (props: Props, contract: StillnessContract) => ResObject | void;
  collect?: StillnessCollector<Props, ResObject>;
}

export type StillnessCollector<CollectedProps, TargetProps = any> = (
  props: TargetProps,
  contract: StillnessContract
) => CollectedProps;
