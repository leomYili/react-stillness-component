import React, { Component, RefObject, createRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';

import { shallowEqual } from '../utils';
import { StillComponent } from '../types';

export interface DecorateHandlerArgs<Props, ItemId> {
  DecoratedComponent: any;
  createHandler: (monitor: any, ref: RefObject<any>) => any;
  getId: (props: Props) => ItemId;
  getGroupId: (props: Props) => ItemId;
  containerDisplayName: string;
  collect: any;
  options: any;
}

/**
 * hoc函数,用于封装class组件,
 *
 * @export
 */
export function decorateHandler<Props, CollectedProps, ItemId>({
  DecoratedComponent,
  createHandler,
  getId,
  getGroupId,
  containerDisplayName,
  collect,
  options,
}: DecorateHandlerArgs<Props, ItemId>): StillComponent<Props> {
  const { forced = false } = options;
  const Decorated: any = DecoratedComponent;

  const displayName =
    DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

  class StillnessContainer
    extends Component<Props>
    implements StillComponent<Props>
  {
    private decoratedRef = createRef();

    public constructor(props:Props){
      super(props);
    }

    public getDecoratedComponentInstance() {
      invariant(
        this.decoratedRef.current,
        'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()'
      );

      return this.decoratedRef.current as any;
    }

    public shouldComponentUpdate(nextProps: any, nextState: any) {
      return (
        !shallowEqual(nextProps, this.props) ||
        !shallowEqual(nextState, this.state)
      );
    }

    public render() {
      return <div>这是decorate组合内容,之后替换为静止组件本体</div>;
    }
  }

  return hoistNonReactStatics(
    StillnessContainer,
    DecoratedComponent
  ) as any as StillComponent<Props>;
}
