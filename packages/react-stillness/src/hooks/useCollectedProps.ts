import { useRef, useContext } from 'react';

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
import { isFunction } from '../utils';

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
  const unsubscribe: any = useRef(null);

  useIsomorphicLayoutEffect(
    function subscribeToMonitorStateChange() {
      if (isFunction(unsubscribe.current)) {
        unsubscribe?.current();
      }

      unsubscribe.current = monitor.subscribeToStateChange(
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

      return () => {
        if (isFunction(unsubscribe.current)) {
          unsubscribe.current();
        }
      };
    },
    [monitor, updateCollected, stillnessParentId, handle]
  );

  return collected;
}
