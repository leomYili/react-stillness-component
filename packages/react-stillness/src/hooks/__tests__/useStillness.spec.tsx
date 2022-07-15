import React from 'react';
import {
  act,
  render,
  fireEvent,
  queryByTestId,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { jest } from '@jest/globals';

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
      useStillness();
      return <div />;
    };

    expect(() => {
      render(<Func />);
    }).toThrow(/spec is required/i);
  });
});
