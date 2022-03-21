import { Action } from '../../types';

export type State = number;

export function reduce(state: State = -1, action: Action<any>): State {
  switch (action.type) {
    default:
      return state;
  }
}
