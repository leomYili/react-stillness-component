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
  spec,
  collect,
  options,
}: {
  id?: UniqueId | ((props: RequiredProps) => UniqueId);
  spec: StillnessSpec<RequiredProps, ResObject>;
  collect: StillnessCollector<CollectedProps, RequiredProps>;
  options: StillnessOptions<RequiredProps>;
}) {
  checkDecoratorArguments(
    'withStillness',
    'spec, collect[, options]',
    spec,
    collect,
    options
  );

  // If no unique identifier is written, automatic assignment is performed
  const _id = id || getNextUniqueId().toString();

  let getId: (props: RequiredProps) => UniqueId = _id as (
    props: RequiredProps
  ) => UniqueId;
  if (typeof _id !== 'function') {
    invariant(
      isValidType(_id),
      'Expected "type" provided as the first argument to DragSource to be ' +
        'a string, or a function that returns a string given the current props. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      _id
    );
    getId = () => _id;
  }

  return function decorateStillness<
    RComponentType extends ComponentType<RequiredProps & CollectedProps>
  >(DecoratedComponent: ComponentType) {
    return decorateHandler<RequiredProps, CollectedProps, UniqueId>({
      DecoratedComponent,
      containerDisplayName: 'Stillness',
      createHandler: () => {},
      getId,
      collect,
      options,
    });
  };
}
