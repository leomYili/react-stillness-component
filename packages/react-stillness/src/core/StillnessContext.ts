import { createContext } from 'react';

import { StillnessContextType } from '../types';

export const StillnessContext = createContext<StillnessContextType>({
  stillnessManager: undefined,
});
