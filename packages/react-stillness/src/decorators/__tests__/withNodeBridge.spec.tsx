import React from 'react';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';

import { withNodeBridge } from '../withNodeBridge';
import { OffscreenInnerProps } from '../../components';

describe('withNodeBridge', () => {
  it('can apply to a react class component', () => {
    class TestClass extends React.Component<
      React.PropsWithChildren<OffscreenInnerProps>
    > {}

    const DecoratedClass = withNodeBridge(TestClass);

    expect(DecoratedClass).toBeDefined();
  });

  it('can apply to a function component', () => {
    const Component: React.FC<
      React.PropsWithChildren<OffscreenInnerProps>
    > = () => null;

    const DecoratedClass = withNodeBridge(Component);

    expect(DecoratedClass).toBeDefined();
  });

  it('throw an error if rendered', () => {
    console.error = jest.fn();

    class TestClass extends React.Component<
      React.PropsWithChildren<OffscreenInnerProps>
    > {}

    const DecoratedClass = withNodeBridge(TestClass);

    expect(() => {
      render(<DecoratedClass visible />);
    }).toThrow(/Expected stillness component context/);
  });
});
