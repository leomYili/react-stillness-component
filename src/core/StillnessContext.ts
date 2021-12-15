import { createContext } from 'react';

import type { StillnessContextType } from '../types';

export const StillnessContext = createContext<StillnessContextType>({
  stillnessManager: undefined,
});
