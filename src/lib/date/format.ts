export const isoToInput = (iso?: string) => {
  if (!iso) return '';
  return iso.split('T')[0];
};