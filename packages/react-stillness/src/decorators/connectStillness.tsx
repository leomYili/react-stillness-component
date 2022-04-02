import { ComponentType } from 'react';

import { decorateHandler } from './decorateHandler';
import { StillnessContractImpl, StillnessHandleImpl } from '../internals';
import { checkDecoratorArguments } from '../utils';
import {
  UniqueId,
  StillnessSpec,
  StillnessCollector,
  StillnessManager,
  FactoryOrInstance,
} from '../types';

export function connectStillness<
  RequiredProps,
  CollectedProps = any,
  ResObject = any
>(specArg: FactoryOrInstance<StillnessSpec<CollectedProps, ResObject>>) {
  checkDecoratorArguments('connectStillness', 'specArg');

  const _spec =
    typeof specArg === 'function'
      ? (specArg as () => StillnessSpec<CollectedProps, ResObject>)()
      : (specArg as StillnessSpec<CollectedProps, ResObject>);

  return function decorateStillness<
    RComponentType extends ComponentType<RequiredProps & CollectedProps>
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
  };
}
