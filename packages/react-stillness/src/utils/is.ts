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
