export const inputToDate = (value?: string) => {
  if (!value) return undefined;

  const [year, month, day] = value.split('-').map(Number);
  const d = new Date(year, month - 1, day);

  return isNaN(d.getTime()) ? undefined : d;
};
