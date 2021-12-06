import { StillnessMonitor } from './monitors';

export interface StillnessSpec<Props, ResObject = any> {
  /**
   * Optional
   * When the component is ready to start stillness, here you can set the condition of stillness
   * only return boolean:true, can be stilled, otherwise ignore all the stillness related events afterwards
   */
  canStillness?: (
    props: Props,
    monitor: StillnessMonitor<ResObject>
  ) => boolean;
  /**
   * optional
   * This event will be triggered after the component goes to rest
   * and if there is any return value, it will be returned in monitor.getItem()
   * @param props
   * @param monitor
   */
  didMount?: (
    props: Props,
    monitor: StillnessMonitor<ResObject>
  ) => ResObject | void;
  /**
   * optional
   * This event will be triggered after the component leaves the resting state
   * and if there is any return value, it will be returned in monitor.getItem()
   */
  willUnMount?: (
    props: Props,
    monitor: StillnessMonitor<ResObject>
  ) => ResObject | void;
}

export type StillnessCollector<CollectedProps, TargetProps = any> = (
  monitor: StillnessMonitor,
  props: TargetProps
) => CollectedProps;

export interface StillnessOptions<Props> {
  forcedStillness?: (props: Props) => boolean;
}
