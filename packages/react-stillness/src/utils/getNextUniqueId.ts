const idCounter = {};

export function getStillnessUniqueId(prefix) {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = idCounter[prefix]++;

  return `__stillness-${prefix}${id}__`;
}

export function getNowTimeStr(): string {
  return new Date().getTime().toString();
}
