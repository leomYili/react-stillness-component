import { createContext } from 'react';

import type { StillnessContextType } from '../interfaces';

export const StillnessContext = createContext<StillnessContextType>({
  stillnessManager: undefined,
});
