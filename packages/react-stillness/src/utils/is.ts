const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

export function isValidType(type: unknown, allowArray?: boolean): boolean {
  return (
    typeof type === 'string' ||
    typeof type === 'symbol' ||
    typeof type === 'number' ||
    (!!allowArray &&
      Array.isArray(type) &&
      type.every((t) => isValidType(t, false)))
  );
}

export function isFunction(input: unknown): boolean {
	return typeof input === 'function'
}

export function isSymbol(value) {
  const type = typeof value;
  return (
    type == 'symbol' ||
    (type === 'object' && value != null && getTag(value) == '[object Symbol]')
  );
}

export function intersection<T>(itemsA: T[], itemsB: T[]): T[] {
	return itemsA.filter((t) => itemsB.indexOf(t) > -1)
}