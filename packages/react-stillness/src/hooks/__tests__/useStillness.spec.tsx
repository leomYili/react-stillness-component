import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';

import { useStillness } from '../useStillness';
import { StillnessProvider } from '../../core/StillnessProvider';
import { Offscreen } from '../../components';
import { sleep } from '../../utils/testingHelper';

describe('useStillness', () => {
  it('Error is reported when there is no context', () => {
    console.error = jest.fn();

    const Func = () => {
      useStillness({});
      return <div />;
    };

    expect(() => {
      render(<Func />);
    }).toThrow(/Expected stillness component context/i);
  });

  it('Will an error be reported when there are no parameters', () => {
    console.error = jest.fn();

    const Func = () => {
      // @ts-ignore
      useStillness();
      return <div />;
    };

    expect(() => {
      render(<Func />);
    }).toThrow(/spec is required/i);
  });

  it('Listen for changes in the state of the parent stillness and generate the correct response', async () => {
    const Demo = () => {
      const [visible, setVisible] = React.useState(true);

      return (
        <StillnessProvider>
          <Offscreen visible={visible}>
            <Test />
          </Offscreen>
          <button data-testid="toggle" onClick={() => setVisible(!visible)}>
            click
          </button>
        </StillnessProvider>
      );
    };

    const Test = () => {
      const collected = useStillness({
        mounted: () => {
          return 'mounted';
        },
        unmounted: () => {
          return 'unmounted';
        },
        collect(contract) {
          return {
            item: contract.getStillnessItem(),
          };
        },
      });

      return <div data-testid="content">{collected.item}</div>;
    };
    const user = userEvent.setup();

    const { queryByTestId, getByTestId, queryByText } = render(<Demo />);

    expect(queryByTestId('content')).toBeInTheDocument();

    await user.click(getByTestId('toggle'));

    expect(queryByTestId('content')).not.toBeInTheDocument();

    await user.click(getByTestId('toggle'));

    expect(queryByText('unmounted')).toBeInTheDocument();
  });
});
