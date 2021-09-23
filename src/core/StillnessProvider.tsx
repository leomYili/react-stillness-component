import React, { FC, useEffect, memo } from 'react';
import { StillnessContext } from './StillnessContext';

/**
 * stillness Component 的上下文,用于缓存所有静止实例
 * @param param0 
 * @returns 
 */
function StillnessProvider({ children, ...props }) {
  return (
    <StillnessContext.Provider value={{ stillnessManager: {} }}>
      {children}
    </StillnessContext.Provider>
  );
}

export default memo(StillnessProvider);
