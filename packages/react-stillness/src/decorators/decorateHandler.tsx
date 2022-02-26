import React, { Component, RefObject, createRef } from 'react';
import ReactDOM from 'react-dom';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';
import { StillnessContext, StillnessNodeContext } from '../core';
import { shallowEqual, isPlainObject, isRefAble } from '../utils';
import {
  UniqueId,
  Identifier,
  StillComponent,
  StillnessManager,
  StillnessMonitor,
} from '../types';

export interface DecorateHandlerArgs<Props, ItemId> {
  DecoratedComponent: any;
  createMonitor: (
    manager: StillnessManager,
    groupId: Identifier
  ) => HandleReceiverMonitor;
  getId: (props: Props) => ItemId;
  getGroupId: (props: Props) => ItemId;
  containerDisplayName: string;
  collect: any;
  options?: any;
}

interface HandleReceiverMonitor {
  receiveId: (id: UniqueId) => void;
  receiveGroupId: (groupId: UniqueId) => void;
}

interface StillnessComponentState {
  stillnessParentId: Identifier;
  activated: boolean;
  setStillnessParentId: (id: Identifier) => any;
}

interface StillnessComponentProps {
  active: boolean;
}

/**
 * hoc函数,用于封装class组件,
 *
 * @export
 */
export function decorateHandler<Props, CollectedProps, ItemId>({
  DecoratedComponent,
  createMonitor,
  getId,
  getGroupId,
  containerDisplayName,
  collect,
  options,
}: DecorateHandlerArgs<Props, ItemId>): StillComponent<Props> {
  const { forced = false } = options;
  const Decorated: any = DecoratedComponent;

  const displayName =
    DecoratedComponent.displayName ||
    DecoratedComponent.name ||
    'StillnessComponent';

  class StillnessComponent
    extends Component<StillnessComponentProps, StillnessComponentState>
    implements StillComponent<StillnessComponentProps>
  {
    private decoratedRef: any = createRef();
    private containerRef: any = createRef();
    private manager: StillnessManager | undefined;
    private handleMonitor: HandleReceiverMonitor | undefined;
    private targetElement: HTMLElement = document.createElement('div');

    public constructor(props: StillnessComponentProps) {
      super(props);

      this.state = {
        stillnessParentId: null,
        activated: props?.active || true,
        setStillnessParentId: this.setStillnessParentId,
      };
    }

    public setStillnessParentId = (parentId) => {
      this.setState({ stillnessParentId: parentId });
    };

    public getDecoratedComponentInstance() {
      invariant(
        this.decoratedRef.current,
        'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()'
      );

      return this.decoratedRef.current as any;
    }

    public componentDidMount() {
      this.receiveProps(this.props);
      this.handleChange(() => {
        if (this.state.activated) {
          this.activate();
        }
      });
    }

    public componentDidUpdate(
      prevProps: Readonly<StillnessComponentProps>
    ): void {
      if (!shallowEqual(this.props, prevProps)) {
        this.receiveProps(this.props);
        this.handleChange(() => {
          if (!this.state.activated) {
            this.unActivate();
          } else {
            this.activate();
          }
        });
      }
    }

    public shouldComponentUpdate(nextProps: any, nextState: any) {
      return (
        !shallowEqual(nextProps, this.props) ||
        !shallowEqual(nextState, this.state)
      );
    }

    public activate() {
      this.containerRef?.current?.insertAdjacentElement(
        'afterend',
        this.targetElement
      );
    }

    public unActivate() {
      if (this.containerRef?.current?.parentNode !== null) {
        this.containerRef?.current?.parentNode.removeChild(this.targetElement);
      }

      this.containerRef?.current?.removeChild(this.targetElement);
    }

    public receiveProps(props: any) {
      if (!this.manager || !this.handleMonitor) {
        return;
      }

      
      this.handleMonitor.receiveId(getId(props) as unknown as UniqueId);
      this.handleMonitor.receiveGroupId(getGroupId(props) as unknown as UniqueId);
    }

    public handleChange = (callback?: Function) => {
      const nextState = this.getCurrentState();
      if (!shallowEqual(nextState, this.state as unknown as CollectedProps)) {
        this.setState({ ...nextState }, () => callback());
      }
    };

    public getCurrentState(): CollectedProps {
      if (!this.handleMonitor) {
        return {} as CollectedProps;
      }

      const nextState = collect(
        this.props,
        this.handleMonitor
      ) as CollectedProps;

      if (process.env.NODE_ENV !== 'production') {
        invariant(
          isPlainObject(nextState),
          'Expected `collect` specified as the second argument to ' +
            '%s for %s to return a plain object of props to inject. ' +
            'Instead, received %s.',
          containerDisplayName,
          displayName,
          nextState
        );
      }

      return nextState;
    }

    public render() {
      return (
        <StillnessNodeContext.Consumer>
          {({ stillnessParentId }) => {
            return (
              <StillnessContext.Consumer>
                {({ stillnessManager }) => {
                  this.receiveStillnessManager(
                    stillnessManager as unknown as StillnessManager,
                    stillnessParentId
                  );

                  return (
                    <StillnessNodeContext.Provider
                      value={{
                        stillnessParentId: getId(this.props as any) as any,
                      }}
                    >
                      <div ref={this.containerRef} />
                      {this.state.activated &&
                        ReactDOM.createPortal(
                          <Decorated
                            {...this.props}
                            {...this.getCurrentState()}
                            ref={
                              isRefAble(Decorated) ? this.decoratedRef : null
                            }
                          />,
                          this.targetElement
                        )}
                    </StillnessNodeContext.Provider>
                  );
                }}
              </StillnessContext.Consumer>
            );
          }}
        </StillnessNodeContext.Consumer>
      );
    }

    public receiveStillnessManager(
      stillnessManager: StillnessManager,
      stillnessParentId
    ) {
      if (this.manager !== undefined) {
        return;
      }

      if (stillnessManager === undefined) {
        return;
      }

      this.manager = stillnessManager;

      // 这里需要对parentId进行初始化处理
      this.handleMonitor = createMonitor(stillnessManager, stillnessParentId);
    }
  }

  return hoistNonReactStatics(
    StillnessComponent,
    DecoratedComponent
  ) as any as StillComponent<Props>;
}
