export function normalizeSearchParams(
  input?: Record<string, string | string[] | undefined>,
): URLSearchParams {
  const params = new URLSearchParams();

  if (!input) return params;

  for (const key in input) {
    const value = input[key];

    if (value === undefined) continue;

    if (Array.isArray(value)) {
      if (value[0]) params.set(key, value[0]);
    } else {
      params.set(key, value);
    }
  }

  return params;
}
