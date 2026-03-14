export function normalizeString(value: unknown): string {
    if(typeof value !== 'string') {
        return '';
    }

    return value.trim();
}

export function normalizeDisplayString(value: unknown): string {
  const str = normalizeString(value);

  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function normalizeCapitalize(value: unknown): string {
  const str = normalizeString(value);
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function normalizeLowerCase(value: unknown): string {
    return normalizeString(value).toLocaleLowerCase();
}

export function normalizeUpperCase(value: unknown): string {
    return normalizeString(value).toLocaleUpperCase();
}

export function normalizeNullableString(
    value: unknown
): string | null {

    if(value === null) {
        return null;
    }

    return normalizeString(value);
}