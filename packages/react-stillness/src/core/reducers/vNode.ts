import { UniqueId, Action } from '../../types';

export interface State {
  id: UniqueId;
  parentId: UniqueId;
  groupId: UniqueId;
  isStillness: boolean;
  props: any;
  config: {
    forced: boolean;
  };
}

export function reduce(
  state: State[] = [],
  action: Action<any>
): State[] {
  switch (action.type) {
    default:
      return state;
  }
}
