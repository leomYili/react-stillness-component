import { useMemo } from 'react';

import { StillnessContractImpl } from '../internals';
import { StillnessMonitor, StillnessManager } from '../types';
import { useStillnessManager } from './useStillnessManager';

export function useStillnessMonitor(
  stillnessManager: StillnessManager
): StillnessMonitor {
  return useMemo(() => stillnessManager.getMonitor(), [stillnessManager]);
}
