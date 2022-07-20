import { cleanup } from '@testing-library/react';

import { createStillnessManager } from '../createStillnessManager';
import { getStillnessUniqueId } from '../../utils';
import { operationTypes } from '../../constants';

import { RESET_MAX } from '../actions/maxActions';

describe('StillnessStores', () => {
  it('init store', () => {
    let manager = createStillnessManager();

    expect(manager.getStore().max.capacity).toBe(-1);
    expect(manager.getStore().operation.type).toBe(null);
    expect(manager.getStore().vNodes).toMatchObject({});
  });

  let manager = createStillnessManager();
  let uniqueId = getStillnessUniqueId('uniqueId').toString();

  it('use dispatch', () => {
    manager.dispatch({
      type: RESET_MAX,
      payload: {
        max: 1,
      },
    });

    expect(manager.getStore().max.capacity).toEqual(1);
  });

  it('action createVNode', () => {
    manager.getActions().createVNode({
      uniqueId,
      parentId: 'root',
      visible: true,
      isStillness: false,
    });

    expect(manager.getStore().vNodes[uniqueId].uniqueId).toEqual(uniqueId);
    expect(manager.getStore().vNodes[uniqueId].visible).toBe(true);
  });

  it('action updateVNode', () => {
    manager.getActions().updateVNode({
      uniqueId,
      parentId: 'root',
      type: 'test1',
      visible: false,
      isStillness: true,
    });

    expect(manager.getStore().vNodes[uniqueId].type).toBe('test1');
    expect(manager.getStore().vNodes[uniqueId].visible).toBe(false);
  });

  it('action removeVNode', () => {
    manager.getActions().removeVNode({ uniqueId });

    expect(manager.getStore().vNodes[uniqueId]).toEqual(undefined);
  });

  it('action triggerMount', () => {
    manager.getActions().createVNode({
      uniqueId,
      parentId: 'root',
      visible: true,
      isStillness: false,
    });
    manager.getActions().triggerMount({
      id: uniqueId,
    });

    expect(manager.getStore().operation.type).toEqual(operationTypes.MOUNT);
    expect(manager.getStore().operation.targetIds).toContain(uniqueId);
  });

  it('action triggerMount', () => {
    manager.getActions().triggerUnmount({
      id: uniqueId,
    });

    expect(manager.getStore().operation.type).toEqual(operationTypes.UNMOUNT);
    expect(manager.getStore().operation.targetIds).toContain(uniqueId);
  });

  it('action triggerUnset', () => {
    manager.getActions().triggerUnset({
      id: uniqueId,
    });

    expect(manager.getStore().operation.type).toEqual(operationTypes.UNSET);
    expect(manager.getStore().operation.targetIds).toContain(uniqueId);
  });

  it('action triggerUnset', () => {
    manager.getActions().triggerClear();

    expect(manager.getStore().operation.type).toEqual(operationTypes.CLEAR);
  });

  it('action createCache', () => {
    manager.getActions().createCache({
      cacheId: uniqueId,
    });

    expect(manager.getStore().max.caches).toContain(uniqueId);
  });

  it('action updateCache', () => {
    manager.getActions().updateCache({
      cacheId: uniqueId,
    });

    expect(manager.getStore().max.caches).toContain(uniqueId);
  });

  it('action removeCache', () => {
    manager.getActions().removeCache({});

    expect(manager.getStore().max.caches).toMatchObject([]);
  });
});
