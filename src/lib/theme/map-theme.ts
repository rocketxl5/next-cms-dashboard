import { Theme as DbTheme } from '@prisma/client';
import type { Theme } from '@/types/enums/theme';

/**
 * Exhaustiveness guard used to ensure all enum / union cases
 * are handled at compile time.
 *
 * If a new value is added to the source type and not handled
 * in a switch statement, TypeScript will error before runtime.
 */
function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${x}`);
}

/**
 * Maps a database-stored theme enum to a CSS-compatible theme value.
 *
 * Notes:
 * - DATABASE: enum Theme { LIGHT, DARK, SYSTEM }
 * - UI expects a concrete class name ("light" | "dark")
 * - "SYSTEM" is resolved to "light" as an SSR-safe default
 *   to avoid hydration mismatches and flash issues
 */
export function mapDatabaseThemeToCss(theme: DbTheme): Theme {
  switch (theme) {
    case 'DARK':
      return 'dark';
    case 'LIGHT':
      return 'light';
    case 'SYSTEM':
      return 'light'; // SSR-safe fallback
    default:
      return assertNever(theme);
  }
}

/**
 * Maps a UI theme value back to the database enum.
 *
 * Used when persisting user preferences.
 * This function performs a strict, explicit mapping
 * to prevent invalid values from reaching the database.
 */
export function mapCssThemeToDatabase(theme: Theme): DbTheme {
  switch (theme) {
    case 'dark':
      return 'DARK';
    case 'light':
      return 'LIGHT';
    case 'system':
      return 'SYSTEM';
    default:
      return assertNever(theme);
  }
}
