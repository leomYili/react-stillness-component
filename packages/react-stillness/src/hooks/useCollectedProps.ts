import { useState, useCallback, useContext } from 'react';
import equal from 'fast-deep-equal';

import { useCollector } from './useCollector';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { StillnessNodeContext } from '../core';
import {
  StillnessContract,
  Handle,
  StillnessMonitor,
  UniqueId,
  HandlerContract,
} from '../types';

export function useCollectedProps<Collected>(
  collector: ((contract: StillnessContract) => Collected) | undefined,
  monitor: StillnessMonitor,
  contract: StillnessContract & HandlerContract,
  handle: Handle
): Collected {
  const [collected, updateCollected] = useCollector(
    contract,
    collector || (() => ({} as Collected))
  );
  const { stillnessParentId } = useContext(StillnessNodeContext);

  useIsomorphicLayoutEffect(
    function subscribeToMonitorStateChange() {
      return monitor.subscribeToStateChange(
        () => {
          const parentIsStillness = monitor.isStillness(stillnessParentId);
          if (!parentIsStillness) {
            contract.receiveItem(handle.unmount());
          } else {
            contract.receiveItem(handle.mount());
          }

          updateCollected();
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
