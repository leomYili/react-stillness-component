import { useMemo } from 'react';

import { HandleImpl } from './HandleImpl';
import { Handle } from '../types';
import { useStillnessManager } from './useStillnessManager';

export function useStillnessHandle(spec, contract): Handle {
  const stillnessManager = useStillnessManager();
  return useMemo(
    () => new HandleImpl(spec, stillnessManager, contract),
    [spec, stillnessManager, contract]
  );
}
