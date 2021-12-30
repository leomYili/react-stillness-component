import { Action } from '../../types';

export type State = number;

export function reduce(state: State, action: Action<any>): State {
  switch (action.type) {
    default:
      return state;
  }
}
