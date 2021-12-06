import { createContext } from 'react';

import type { StillnessContextType } from '../index';

export const StillnessContext = createContext<StillnessContextType>({
  stillnessManager: undefined,
});
