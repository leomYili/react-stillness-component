import React from 'react';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';

import { StillnessProvider } from '../../core/StillnessProvider';
import { connectStillness } from '../connectStillness';
import { Offscreen } from '../../components';

describe('connectStillness', () => {
  it('Will an error be reported when there are no parameters', () => {
    console.error = jest.fn();
    class Component extends React.Component {}

    expect(() => {
      connectStillness()(Component);
    }).toThrow(/spec is required/i);
  });

  it('Will an error be reported when there is no collect', () => {
    console.warn = jest.fn();
    class Component extends React.Component {
      render() {
        return <div />;
      }
    }

    const DecoratedClass = connectStillness({})(Component);

    render(
      <StillnessProvider>
        <Offscreen visible>
          <DecoratedClass />
        </Offscreen>
      </StillnessProvider>
    );

    expect(global.console.warn).toBeCalled();
  });

  it('show null when there is no context', () => {
    class Component extends React.Component {
      render() {
        return <div>test</div>;
      }
    }

    const DecoratedClass = connectStillness({})(Component);

    const { queryByTestId } = render(<DecoratedClass />);

    expect(queryByTestId('test')).not.toBeInTheDocument();
  });
});
