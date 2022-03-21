import { createContext } from 'react';

export const StillnessContext = createContext<any>(null);
export const { Provider, Consumer } = StillnessContext;
