export function checkDecoratorArguments(
  functionName: string,
  signature: string,
  ...args: any[]
): void {
  if (process.env.NODE_ENV !== 'production') {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg && arg.prototype && arg.prototype.render) {
        console.error(
          'You seem to be applying the arguments in the wrong order. ' +
            `It should be ${functionName}(${signature})(Component), not the other way around. `
        );
        return;
      }
    }
  }
}
