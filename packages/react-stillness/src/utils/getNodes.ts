import { Identifier, UniqueId } from '../types';
import { isUndefined } from './is';


interface Params {
  nodes:any;
  id:UniqueId;
  type?:Identifier;
}

export function getNodeIdsByCondition({ nodes, id, type}:Params):UniqueId[] {
  let result = [id, ...getNodeIdsByRootId(nodes, id)];

  if (!isUndefined(type)) {
    for (let k of Object.keys(nodes)) {
      const _id = nodes[k].uniqueId;
      if (nodes[k].type === type && !result.includes(_id)) {
        let arr = [_id, ...getNodeIdsByRootId(nodes, _id)];
        result = [...result,...arr]
      }
    }
  }

  return result;
}

export function getNodeIdsByRootId(nodes, rootId) {
  let result = [];

  let queue = [];

  for (let k of Object.keys(nodes)) {
    if (nodes[k].parentId === rootId) {
      queue.push(nodes[k].uniqueId);
    }
  }

  while (queue.length > 0) {
    var v = queue.shift();
    result.push(v);
    for (let w of Object.keys(nodes)) {
      if (nodes[w].parentId === v) {
        queue.push(nodes[w].uniqueId);
      }
    }
  }

  return result;
}
