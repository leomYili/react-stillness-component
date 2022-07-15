import invariant from 'invariant';
import { useCollectedProps } from './useCollectedProps';
import { StillnessHookSpec, FactoryOrInstance } from '../types';
import { useOptionalFactory } from './useOptionalFactory';
import { useStillnessContract } from './useStillnessContract';
import { useStillnessMonitor } from './useStillnessMonitor';
import { useStillnessManager } from './useStillnessManager';
import { useStillnessHandle } from './useStillnessHandle';
import { isUndefined } from '../utils';

export function useStillness<CollectedProps, ResObject = any>(
  specArg: FactoryOrInstance<StillnessHookSpec<CollectedProps, ResObject>>,
  deps?: unknown[]
): CollectedProps {
  invariant(!isUndefined(specArg), 'spec is required');

  const stillnessManager = useStillnessManager();
  const spec = useOptionalFactory(specArg, deps);
  const contract = useStillnessContract(spec, stillnessManager);
  const monitor = useStillnessMonitor(stillnessManager);
  const handle = useStillnessHandle(spec, contract);

  return useCollectedProps(spec.collect, monitor, contract, handle);
}
