import React from 'react';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';

import { useStillnessManager } from '../useStillnessManager';

describe('useStillnessManager', () => {
  it('Error is reported when there is no context', () => {
    console.error = jest.fn();

    const Func = () => {
      useStillnessManager();
      return <div />;
    };

    expect(() => {
      render(<Func />);
    }).toThrow(/Expected stillness component context/i);
  });
});
