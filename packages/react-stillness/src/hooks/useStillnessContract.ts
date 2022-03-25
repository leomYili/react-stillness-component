import { useMemo } from 'react';

import { useReceive } from './useReceive';
import { StillnessContractImpl } from '../internals';
import {
  StillnessContract,
  HandlerContract,
  StillnessManager,
  StillnessHookSpec,
} from '../types';

export function useStillnessContract<C, R>(
  spec: StillnessHookSpec<C, R>,
  stillnessManager: StillnessManager
): StillnessContract & HandlerContract {
  const contract = useMemo(() => {
    return new StillnessContractImpl(stillnessManager);
  }, [stillnessManager]);

  useReceive(spec, contract);

  return contract;
}
