import { useMemo } from 'react';

import { useCollectedProps } from './useCollectedProps';
import { StillnessHookSpec, FactoryOrInstance } from '../types';
import { useOptionalFactory } from './useOptionalFactory';
import { useStillnessContract } from './useStillnessContract';
import { useStillnessMonitor } from './useStillnessMonitor';
import { useStillnessManager } from './useStillnessManager';
import { useStillnessHandle } from './useStillnessHandle';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useStillness<CollectedProps, ResObject = any>(
  specArg: FactoryOrInstance<StillnessHookSpec<CollectedProps, ResObject>>,
  deps?: unknown[]
): CollectedProps {
  const stillnessManager = useStillnessManager();
  const spec = useOptionalFactory(specArg, deps);
  const contract = useStillnessContract(stillnessManager);
  const monitor = useStillnessMonitor(stillnessManager);
  const handle = useStillnessHandle(spec, contract);

  return useCollectedProps(spec.collect, monitor, contract, handle);
}
