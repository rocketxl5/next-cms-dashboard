import { ThemeClassName } from '@/lib/theme';

export function isThemeClassName(
  value: string | undefined
): value is ThemeClassName {
  return value === 'light' || value === 'dark';
}
