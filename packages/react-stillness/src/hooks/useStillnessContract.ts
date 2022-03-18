import { useMemo } from 'react';

import { StillnessContractImpl } from '../internals';
import { StillnessContract, HandlerContract, StillnessManager } from '../types';
import { useStillnessManager } from './useStillnessManager';

export function useStillnessContract(
  stillnessManager: StillnessManager
): StillnessContract & HandlerContract {
  return useMemo(
    () => new StillnessContractImpl(stillnessManager),
    [stillnessManager]
  );
}
