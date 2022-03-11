import { Action } from '../../types';

export const TRIGGER_MOUNT = 'stillness/triggerMount';
export const TRIGGER_UNMOUNT = 'stillness/triggerUnmount';
export const TRIGGER_UNSET = 'stillness/triggerUnset';
export const TRIGGER_CLEAR = 'stillness/triggerClear';

export function triggerMount(payload: any): Action<any> {
  return {
    type: TRIGGER_MOUNT,
    payload: payload,
  };
}

export function triggerUnmount(payload: any): Action<any> {
  return {
    type: TRIGGER_UNMOUNT,
    payload: payload,
  };
}