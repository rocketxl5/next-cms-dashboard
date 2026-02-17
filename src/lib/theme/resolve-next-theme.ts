import { Theme } from '@/types/enums';

/**
 * Resolve the next UI theme from the current one.
 * ------------------------------------------------
 * - Pure function (no side effects)
 * - UI-layer only (does NOT touch cookies, DB, or Prisma enums)
 * - Assumes input is already a valid ThemeClassName
 * - Used for state transitions (e.g. theme toggle button)
 *
 * This is intentionally separate from:
 * - `setTheme(...)` → normalization / fallback
 * - DB ↔ UI mapping helpers
 */

export const resolveNextTheme = (theme: Theme) => {
  return theme === 'light' ? 'dark' : 'light';
};
