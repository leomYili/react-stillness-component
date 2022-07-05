import React, { Component, ComponentType, ComponentClass } from 'react';
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

export type Shared<InjectedProps, DecorationTargetProps> = {
  [P in Extract<
    keyof InjectedProps,
    keyof DecorationTargetProps
  >]?: InjectedProps[P] extends DecorationTargetProps[P]
    ? DecorationTargetProps[P]
    : never;
};

export type Matching<InjectedProps, DecorationTargetProps> = {
  [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P];
};

/**
 * Gets the props interface of a component using inference
 */
export type GetProps<C> = C extends ComponentType<infer P> ? P : never;

export type StillnessComponentEnhancer<CollectedProps> = <
  C extends ComponentType<Matching<CollectedProps, GetProps<C>>>
>(
  component: C
) => StillnessComponentClass<
  C,
  Omit<GetProps<C>, keyof Shared<CollectedProps, GetProps<C>>>
>;

// Applies LibraryManagedAttributes (proper handling of defaultProps
// and propTypes), as well as defines WrappedComponent.
export type StillnessComponentClass<
  C extends ComponentType<any>,
  P
> = ComponentClass<JSX.LibraryManagedAttributes<C, P>> & {
  DecoratedComponent: C;
};
