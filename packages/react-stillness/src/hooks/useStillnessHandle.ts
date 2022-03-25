import { useMemo } from 'react';

import { HandleImpl } from './HandleImpl';
import { Handle, StillnessHookSpec, StillnessContract } from '../types';
import { useStillnessManager } from './useStillnessManager';

export function useStillnessHandle<Props, ResObject>(
  spec: StillnessHookSpec<Props, ResObject>,
  contract: StillnessContract
): Handle {
  const stillnessManager = useStillnessManager();
  return useMemo(() => {
    return new HandleImpl(spec, stillnessManager, contract);
  }, [spec, stillnessManager, contract]);
}
