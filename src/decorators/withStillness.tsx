import { ComponentType } from 'react';
import invariant from 'invariant';

import { decorateHandler } from './decorateHandler';
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
} from '../interfaces';

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
  options: StillnessOptions<RequiredProps>;
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
      'Expected "type" provided as the first argument to Stillness to be ' +
        'a string, or a function that returns a string given the current props. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      id
    );
    getId = () => id;
  }

  // If no unique identifier is written, automatic assignment is performed
  let _groupId = groupId || getNextUniqueId().toString();

  let getGroupId: (props: RequiredProps) => UniqueId = _groupId as (
    props: RequiredProps
  ) => UniqueId;
  if (typeof _groupId !== 'function') {
    invariant(
      isValidType(_groupId),
      'Expected "type" provided as the first argument to Stillness to be ' +
        'a string, or a function that returns a string given the current props. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      _groupId
    );
    getGroupId = () => _groupId as UniqueId;
  }

  // 缺少create逻辑,进行初始化静止存储

  return function decorateStillness<
    RComponentType extends ComponentType<RequiredProps & CollectedProps>
  >(DecoratedComponent: ComponentType) {
    return decorateHandler<RequiredProps, CollectedProps, UniqueId>({
      DecoratedComponent,
      containerDisplayName: 'Stillness',
      createHandler: () => {},
      getId,
      getGroupId,
      collect,
      options,
    });
  };
}
