import { Theme } from '@/types/enums';

export function isThemeClassName(value: string | undefined): value is Theme {
  return value === 'light' || value === 'dark';
}
