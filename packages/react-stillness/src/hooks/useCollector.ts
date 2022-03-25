import equal from 'fast-deep-equal';
import { useState, useCallback, useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useCollector<T, S>(
  contract: T,
  collect: (contract: T) => S
): [S, () => void] {
  const [collected, setCollected] = useState(() => collect(contract));

  const updateCollected = useCallback(() => {
    const nextValue = collect(contract);

    if (!equal(collected, nextValue)) {
      setCollected((prevState) => {
        return { ...prevState, ...nextValue };
      });
    }
  }, [collected, contract]);

  useIsomorphicLayoutEffect(updateCollected);

  return [collected, updateCollected];
}
