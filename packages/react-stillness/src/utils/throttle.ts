const now = Date.now || function() {
  return new Date().getTime();
};

export const throttle = (
  func: any,
  context: any,
  wait: number,
  options?: { trailing?: boolean; leading?: boolean }
) => {
  let timeout: any, args: any, result: any;

  let previous = 0;

  var later = function () {
    previous = options?.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  let throttled: any = (...params: any[]) => {
    var _now = now();
    if (!previous && options?.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = params;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options?.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};
