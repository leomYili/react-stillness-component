import { ComponentType as RComponentType, PropsWithChildren } from 'react';

import invariant from 'invariant';
import { decorateHandler } from './decorateHandler';
import { StillnessContractImpl, StillnessHandleImpl } from '../internals';
import { isUndefined } from '../utils';
import {
  UniqueId,
  StillnessSpec,
  StillnessCollector,
  StillnessManager,
  FactoryOrInstance,
  StillnessComponentEnhancer,
} from '../types';

export function connectStillness<
  RequiredProps,
  CollectedProps = any,
  ResObject = any
>(
  specArg: FactoryOrInstance<StillnessSpec<CollectedProps, ResObject>>
): StillnessComponentEnhancer<PropsWithChildren<CollectedProps>> {
  invariant(!isUndefined(specArg), 'spec is required');

  const _spec =
    typeof specArg === 'function'
      ? (specArg as () => StillnessSpec<CollectedProps, ResObject>)()
      : (specArg as StillnessSpec<CollectedProps, ResObject>);

  return function decorateStillness<
    ComponentType extends RComponentType<RequiredProps & CollectedProps>
  >(DecoratedComponent: ComponentType) {
    return decorateHandler<RequiredProps, CollectedProps, UniqueId>({
      DecoratedComponent,
      containerDisplayName: 'Stillness',
      createHandle: (manager, contract) =>
        new StillnessHandleImpl(_spec || {}, manager, contract),
      createContract: (manager: StillnessManager) =>
        new StillnessContractImpl(manager),
      collect: _spec.collect,
    });
  } as any as StillnessComponentEnhancer<PropsWithChildren<CollectedProps>>;
}
