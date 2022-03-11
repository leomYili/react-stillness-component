let nextUniqueId = 0;

export function getNextUniqueId(): number {
  return nextUniqueId++;
}

export function getStillnessUniqueId(prefix): string {
  return `__stillness-${prefix}${getNextUniqueId()}__`;
}
