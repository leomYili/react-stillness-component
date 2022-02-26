export function checkDecoratorArguments(
  functionName: string,
  signature: string,
  ...args: any[]
): void {
  if (process.env.NODE_ENV !== 'production') {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg && arg.prototype && arg.prototype.render) {
        // eslint-disable-next-line no-console
        console.error(
          'You seem to be applying the arguments in the wrong order. ' +
            `It should be ${functionName}(${signature})(Component), not the other way around. ` +
            'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#you-seem-to-be-applying-the-arguments-in-the-wrong-order'
        );
        return;
      }
    }
  }
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

export function isUndefined(o) {
  return o === void 0;
}
