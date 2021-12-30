import { StillnessManager } from '../types';

export function createStillnessManager(
  globalContext: unknown = undefined,
  options: unknown = {}
): StillnessManager {
  return {
    getStore: () => {},
    getActions: () => {
      return {} as any;
    },
    getMonitor: () => {
      return {} as any;
    },
    dispatch: () => {},
  };
}
