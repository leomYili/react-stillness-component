import { useContext } from 'react';
import invariant from 'invariant';
import { StillnessManager } from '../types';
import { StillnessContext } from '../core';

export function useStillnessManager(): StillnessManager {
  const { stillnessManager } = useContext(StillnessContext);
  invariant(stillnessManager != null, 'Expected stillness component context');
  return stillnessManager;
}
