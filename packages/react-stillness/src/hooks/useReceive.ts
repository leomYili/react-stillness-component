import { useCallback, useContext } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { StillnessNodeContext } from '../core';
import {
  StillnessContract,
  StillnessHookSpec,
  HandlerContract,
} from '../types';

export function useReceive<C, R>(
  spec: StillnessHookSpec<C, R>,
  contract: StillnessContract & HandlerContract
) {
  const { stillnessParentId } = useContext(StillnessNodeContext);

  const updateReceived = useCallback(() => {
    if (contract.getStillnessId() === stillnessParentId) {
      return;
    }

    contract.receiveId(stillnessParentId);
  }, [spec, contract, stillnessParentId]);

  useIsomorphicLayoutEffect(updateReceived);
}
