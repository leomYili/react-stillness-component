import { useMemo } from 'react';

import { StillnessMonitor, StillnessManager } from '../types';

export function useStillnessMonitor(
  stillnessManager: StillnessManager
): StillnessMonitor {
  return useMemo(() => stillnessManager.getMonitor(), [stillnessManager]);
}
