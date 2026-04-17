type DateBoundary = 'start' | 'end';

export function toISODate(date: string | undefined, boundary: DateBoundary = 'start') {
  const d = new Date(date as string);

  if (isNaN(d.getTime())) return undefined;

  if (boundary === 'start') {
    d.setHours(0, 0, 0, 0);
  } else {
    d.setHours(23, 59, 59, 999);
  }

  return d.toISOString();
}