export const operationTypes = {
  MOUNT: 'MOUNT',
  UNMOUNT: 'UNMOUNT',
  UNSET: 'UNSET',
  CLEAR: 'CLEAR',
};

export const NONE = 'NONE';

export const lifeCycleTypes = [operationTypes.MOUNT, operationTypes.UNMOUNT];

export const effectTypes = [operationTypes.UNSET, operationTypes.CLEAR];

export const rootId = '__root__';