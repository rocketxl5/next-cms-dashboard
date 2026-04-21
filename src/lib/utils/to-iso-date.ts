type DateBoundary = 'start' | 'end';

export function toISODate(
  date: string | undefined,
  boundary: DateBoundary = 'start',
) {
  if (!date) return undefined;

  const [year, month, day] = date.split('-').map(Number);
  const d = new Date(year, month - 1, day);

  if (isNaN(d.getTime())) return undefined;

  if (boundary === 'start') {
    d.setHours(0, 0, 0, 0);
  } else {
    d.setHours(23, 59, 59, 999);
  }

  return d.toISOString();
}
