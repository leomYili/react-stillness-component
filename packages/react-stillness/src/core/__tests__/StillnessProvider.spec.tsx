import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { jest } from '@jest/globals';

import { StillnessContext } from '../StillnessContext';
import { StillnessProvider } from '../StillnessProvider';
import { INSTANCE_SYM } from '../createStillnessManager';
import { createStillnessManager } from '../createStillnessManager';

describe('StillnessProvider', () => {
  it('Verify that the StillnessManager is correct', () => {
    let capturedManager;
    let manager = createStillnessManager();

    render(
      <StillnessContext.Provider value={{ stillnessManager: manager }}>
        <StillnessContext.Consumer>
          {({ stillnessManager }) => {
            capturedManager = stillnessManager;
            return null;
          }}
        </StillnessContext.Consumer>
      </StillnessContext.Provider>
    );

    expect(capturedManager).toBe(manager);
  });

  it('stores StillnessManager in global context and cleans up on unmount', () => {
    let capturedManager;

    const { container, unmount } = render(
      <StillnessProvider>
        <StillnessContext.Consumer>
          {({ stillnessManager }) => {
            capturedManager = stillnessManager;
            return null;
          }}
        </StillnessContext.Consumer>
      </StillnessProvider>
    );

    const globalInstance = () => (global as any)[INSTANCE_SYM] as any;

    expect(globalInstance().stillnessManager).toEqual(capturedManager);
    unmount();
    expect(globalInstance()).toEqual(null);
  });

  it('two providers exist at the same time', () => {
    console.warn = jest.fn();

    render(
      <StillnessProvider>
        <StillnessContext.Consumer>
          {({ stillnessManager }) => {
            return (
              <StillnessProvider>
                <StillnessContext.Consumer>
                  {({ stillnessManager }) => {
                    return null;
                  }}
                </StillnessContext.Consumer>
              </StillnessProvider>
            );
          }}
        </StillnessContext.Consumer>
      </StillnessProvider>
    );

    expect(global.console.warn).toBeCalled();
  });
});
