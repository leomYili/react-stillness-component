import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  queryHelpers,
} from '@testing-library/react';
import { jest } from '@jest/globals';

import { StillnessProvider } from '../../core/StillnessProvider';
import Offscreen from '../Offscreen';

const queryByOffscreen = queryHelpers.queryByAttribute.bind(null, 'data-type');

const TestDemo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <StillnessProvider>
      <div data-testid="container">
        <Offscreen visible={visible}>
          <div data-testid="text">abc</div>
        </Offscreen>
        {!visible && <div data-testid="test" />}
        <button data-testid="toggle" onClick={() => setVisible(!visible)}>
          toggle
        </button>
      </div>
    </StillnessProvider>
  );
};

describe('Offscreen', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  it('No initial rendering when visible is false', () => {
    const { queryByTestId } = render(
      <StillnessProvider>
        <Offscreen visible={false}>
          <div data-testid="test">test</div>
        </Offscreen>
      </StillnessProvider>
    );

    expect(queryByTestId('text')).not.toBeInTheDocument();
  });

  it('data-type[offscreen-wrapper] appears in the documentation', async () => {
    const { getByTestId, container } = render(<TestDemo />);

    fireEvent.click(getByTestId('toggle'));

    expect(
      queryByOffscreen(container, 'offscreen-wrapper')
    ).toBeInTheDocument();
  });
});
