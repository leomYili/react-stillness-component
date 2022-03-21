import { useState, useCallback, useContext } from 'react';
import equal from 'fast-deep-equal';

import { StillnessContext, StillnessNodeContext } from '../core';
import {
  StillnessContract,
  Handle,
  StillnessMonitor,
  UniqueId,
  HandlerContract,
} from '../types';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useCollectedProps<Collected>(
  collector: ((contract: StillnessContract) => Collected) | undefined,
  monitor: StillnessMonitor,
  contract: StillnessContract & HandlerContract,
  handle: Handle
): Collected {
  const [collected, setCollected] = useState(() => collector(contract));
  const { stillnessParentId } = useContext(StillnessNodeContext);

  const updateCollected = useCallback(() => {
    const nextValue = collector(contract);
    if (!equal(collected, nextValue)) {
      setCollected(nextValue);
    }
  }, [collected, contract]);

  useIsomorphicLayoutEffect(updateCollected);

  useIsomorphicLayoutEffect(
    function subscribeToMonitorStateChange() {
      if (contract.getStillnessId() === stillnessParentId) {
        return;
      }

      contract.receiveId(stillnessParentId);
      return monitor.subscribeToStateChange(
        () => {
          const parentIsStillness = monitor.isStillness(stillnessParentId);
          if (!parentIsStillness) {
            contract.receiveItem(handle.unmount());
          } else {
            contract.receiveItem(handle.mount());
          }
        },
        {
          parentId: stillnessParentId,
        }
      );
    },
    [monitor, updateCollected, stillnessParentId]
  );

  return collected;
}
