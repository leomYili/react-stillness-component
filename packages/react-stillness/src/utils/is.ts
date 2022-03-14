const toString = Object.prototype.toString;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
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
  return typeof input === 'function';
}

export function isSymbol(value) {
  const type = typeof value;
  return (
    type == 'symbol' ||
    (type === 'object' && value != null && getTag(value) == '[object Symbol]')
  );
}

export function intersection<T>(itemsA: T[], itemsB: T[]): T[] {
  return itemsA.filter((t) => itemsB.indexOf(t) > -1);
}

export function isUndefined(obj) {
  return obj === void 0;
}

function isObjectLike(input: any) {
  return typeof input === 'object' && input !== null;
}

export function isPlainObject(input: unknown): boolean {
  if (!isObjectLike(input)) {
    return false;
  }

  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

export function isClassComponent(Component: unknown): boolean {
  return (
    Component &&
    (Component as any).prototype &&
    typeof (Component as any).prototype.render === 'function'
  );
}

export function isRefForwardingComponent(C: unknown): boolean {
  const item = C as any;
  return item?.$$typeof?.toString() === 'Symbol(react.forward_ref)';
}

export function isRefAble(C: unknown): boolean {
  return isClassComponent(C) || isRefForwardingComponent(C);
}

export function isBoolean(obj) {
  return (
    obj === true || obj === false || toString.call(obj) === '[object Boolean]'
  );
}
