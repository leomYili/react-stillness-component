import { ComponentType } from 'react';
import invariant from 'invariant';

import { decorateHandler } from './decorateHandler';
import { StillnessSingeMonitorImpl } from '../internals';
import {
  checkDecoratorArguments,
  getNextUniqueId,
  isValidType,
} from '../utils';
import {
  UniqueId,
  StillnessSpec,
  StillnessCollector,
  StillnessOptions,
  StillnessMonitor,
  StillnessManager,
  Identifier,
} from '../types';

export function withStillness<
  RequiredProps,
  CollectedProps = any,
  ResObject = any
>({
  id,
  groupId,
  spec,
  collect,
  options,
}: {
  id: UniqueId | ((props: RequiredProps) => UniqueId);
  groupId?: UniqueId | ((props: RequiredProps) => UniqueId);
  spec: StillnessSpec<RequiredProps, ResObject>;
  collect: StillnessCollector<CollectedProps, RequiredProps>;
  options?: StillnessOptions<RequiredProps>;
}) {
  checkDecoratorArguments(
    'withStillness',
    'id, spec, collect[, options]',
    spec,
    collect,
    options
  );

  let getId: (props: RequiredProps) => UniqueId = id as (
    props: RequiredProps
  ) => UniqueId;
  if (typeof id !== 'function') {
    invariant(
      isValidType(id),
      'Expected "id" provided as the first argument to Stillness to be ' +
        'a string, or a function that returns a string given the current props. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      id
    );
    getId = () => id;
  }

  let getGroupId: (props: RequiredProps) => UniqueId = groupId as (
    props: RequiredProps
  ) => UniqueId;
  if (typeof groupId !== 'function') {
    getGroupId = () => groupId as UniqueId;
  }

  return function decorateStillness<
    RComponentType extends ComponentType<RequiredProps & CollectedProps>
  >(DecoratedComponent: ComponentType) {
    return decorateHandler<RequiredProps, CollectedProps, UniqueId>({
      DecoratedComponent,
      containerDisplayName: 'Stillness',
      createMonitor: (manager: StillnessManager, groupId: Identifier) =>
        new StillnessSingeMonitorImpl(manager, groupId),
      getId,
      getGroupId,
      collect,
      options,
    });
  };
}
