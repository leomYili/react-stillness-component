import React from 'react';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';

import { StillnessProvider } from '../../core/StillnessProvider';
import { connectStillness } from '../connectStillness';
import { Offscreen } from '../../components';
import { debug } from 'console';

describe('decorateHandler', () => {
  it('', async () => {
    class Component extends React.Component<any, any> {
      render() {
        return <div>{this.props.item}</div>;
      }
    }

    const spec = {
      unmounted: () => {
        return 'unmounted';
      },
      collect: (props: any, contract: any) => {
        return {
          item: contract.getStillnessItem(),
        };
      },
    };

    const DecoratedClass = connectStillness(spec as any)(Component);

    const Demo = () => {
      const [visible, setVisible] = React.useState(true);

      return (
        <StillnessProvider>
          <Offscreen visible={visible}>
            <Offscreen visible>
              <DecoratedClass />
            </Offscreen>
          </Offscreen>
          <button data-testid={"toggle"} onClick={() => setVisible(!visible)}/>
        </StillnessProvider>
      );
    };

    const { queryByText,getByTestId,debug } = render(<Demo />);

    const user = userEvent.setup();

    await user.click(getByTestId('toggle'));
    await user.click(getByTestId('toggle'));

    expect(queryByText('unmounted')).toBeInTheDocument();
  });
});
