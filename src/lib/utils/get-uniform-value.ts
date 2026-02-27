export function getUniformValue<T, K extends keyof T>(items: T[], key: K): T[K] | null {
  if (!items.length) return null;

  const firstValue = items[0][key];

  const isSame = items.every((item) => item[key] === firstValue);

  return isSame ? firstValue : null;
}
