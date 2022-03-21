export const combineFuncs = (slices, ...args) => {
  return Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](...args),
    }),
    {}
  );
};
