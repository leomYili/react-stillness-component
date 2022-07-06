export const throttle = (func: any, context: any, wait: number) => {
  let prev = 0;

  return (...args: any) => {
    let now = +new Date();

    if (now - prev > wait) {
      prev = now;

      func.apply(context, args);
    }
  };
};
