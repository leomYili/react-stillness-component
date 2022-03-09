import { ComponentType } from 'react';
import invariant from 'invariant';

import { decorateHandler } from './decorateHandler';
import { StillnessContractImpl, StillnessHandleImpl } from '../internals';
import {
  checkDecoratorArguments,
} from '../utils';
import {
  UniqueId,
  StillnessSpec,
  StillnessCollector,
  StillnessManager,
} from '../types';

export function connectStillness<
  RequiredProps,
  CollectedProps = any,
  ResObject = any
>({
  spec,
  collect,
}: {
  spec: StillnessSpec<RequiredProps, ResObject>;
  collect: StillnessCollector<CollectedProps, RequiredProps>;
}) {
  checkDecoratorArguments('connectStillness', 'spec,collect', spec, collect);

  return function decorateStillness<
    RComponentType extends ComponentType<RequiredProps & CollectedProps>
  >(DecoratedComponent: ComponentType) {
    return decorateHandler<RequiredProps, CollectedProps, UniqueId>({
      DecoratedComponent,
      containerDisplayName: 'Stillness',
      createHandle: (manager, contract) =>
        new StillnessHandleImpl(spec, manager, contract),
      createContract: (manager: StillnessManager) =>
        new StillnessContractImpl(manager),
      collect,
    });
  };
}
