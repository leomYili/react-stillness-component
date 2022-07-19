// @ts-nocheck
import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  queryHelpers,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';

import { StillnessProvider } from '../../core/StillnessProvider';
import Offscreen, { OffscreenComponent } from '../Offscreen';
import { rootId } from '../../constants';

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

  let mockStillnessManager: any = jest.fn().mockReturnValue({
    getStore: () => {
      return 'store';
    },
    getActions: () => {
      return { triggerUnmount: () => {}, triggerMount: () => {} };
    },
  });

  it('Does it prompt an error message if there is no unique id', () => {
    global.console.error = jest.fn();
    expect(() => {
      render(
        <OffscreenComponent
          visible={true}
          stillnessManager={mockStillnessManager()}
          isStillness={false}
          parentId={rootId}
          parentIsStillness={false}
        >
          <div />
        </OffscreenComponent>
      );
    }).toThrow(/uniqueId is required/i);
  });

  it('Does it prompt an error message when there is no context?', () => {
    global.console.error = jest.fn();

    expect(() => {
      render(
        <OffscreenComponent
          visible={true}
          isStillness={false}
          uniqueId="test1"
          parentId={rootId}
          parentIsStillness={false}
        >
          <div />
        </OffscreenComponent>
      );
    }).toThrow(/stillnessManager is required/i);
  });

  it('If the initialization parameter isStillness is false, the static content will be seen', () => {
    const { queryByTestId } = render(
      <OffscreenComponent
        visible={true}
        isStillness={false}
        uniqueId="test1"
        stillnessManager={mockStillnessManager()}
        parentId={rootId}
        parentIsStillness={false}
      >
        <div data-testid="content" />
      </OffscreenComponent>
    );

    expect(queryByTestId('content')).toBeInTheDocument();
  });

  it('When the passed isStillness changes, clear the corresponding dom element or reload the original one', async () => {
    const Demo = ({ isStillness }: any) => {
      return (
        <OffscreenComponent
          visible={true}
          isStillness={isStillness}
          uniqueId="test1"
          stillnessManager={mockStillnessManager()}
          parentId={rootId}
          parentIsStillness={false}
        >
          <div data-testid="content" />
        </OffscreenComponent>
      );
    };

    const { queryByTestId, rerender } = render(<Demo isStillness={false} />);

    rerender(<Demo isStillness={true} />);
    expect(queryByTestId('content')).not.toBeInTheDocument();

    rerender(<Demo isStillness={false} />);
    expect(queryByTestId('content')).toBeInTheDocument();
  });

  it('After switching props, the scroll property of the content will be reset according to the scrollReset set in advance', async () => {
    const Demo = ({ isStillness }: any) => {
      return (
        <OffscreenComponent
          visible={true}
          isStillness={isStillness}
          uniqueId="test1"
          stillnessManager={mockStillnessManager()}
          parentId={rootId}
          parentIsStillness={false}
        >
          <div
            data-testid="container"
            style={{ overflow: 'auto', width: 50, height: 100 }}
          >
            <div data-testid="content" style={{ width: 100, height: 200 }} />
          </div>
        </OffscreenComponent>
      );
    };

    const { getByTestId, queryByTestId, container, rerender, debug } = render(
      <Demo isStillness={false} />
    );

    getByTestId('container').scrollTop = 50;
    fireEvent.scroll(getByTestId('container'), { top: 50 });

    rerender(<Demo isStillness={true} />);

    rerender(<Demo isStillness={false} />);

    expect(getByTestId('container').scrollTop).toEqual(50);
  });

  it('Check if the ref method is in effect', () => {
    const Demo = () => {
      const offscreen1Ref = React.useRef(null);
      const [text, setText] = React.useState('');

      React.useEffect(() => {
        setText(offscreen1Ref.current?.isStillness().toString());
      }, []);

      return (
        <StillnessProvider>
          <Offscreen visible ref={offscreen1Ref}>
            123
          </Offscreen>
          {text}
        </StillnessProvider>
      );
    };

    const { queryByText } = render(<Demo />);

    expect(queryByText('123')).toBeInTheDocument();
    expect(queryByText('false')).toBeInTheDocument();
  });
});
