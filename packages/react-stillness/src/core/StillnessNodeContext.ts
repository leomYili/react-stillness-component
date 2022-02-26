import { createContext } from 'react';

import { StillnessNodeContextType } from '../types';

export const StillnessNodeContext = createContext<StillnessNodeContextType>({
  stillnessParentId: undefined,
});
