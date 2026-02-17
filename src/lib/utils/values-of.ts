import { ValueOf } from "@/types/utils/value-of";

/**
 * valuesOf
 * -----------------------------------------------------------------------------
 * Strongly typed alternative to `Object.values`.
 *
 * Extracts all runtime values from an object while preserving the union of the
 * object's value types at compile time.
 *
 * Why this exists:
 * - `Object.values()` loses literal type information and typically returns
 *   `unknown[]` or widened value types (e.g. `string[]`).
 * - This helper restores precise typing by leveraging `ValueOf<T>`.
 *
 * Common use cases:
 * - Deriving runtime arrays from `as const` configuration objects
 * - RBAC capability or role extraction
 * - UI dropdown generation
 * - Validation and schema-driven logic
 *
 * Example:
 *
 * const ROLES = {
 *   ADMIN: "admin",
 *   USER: "user"
 * } as const;
 *
 * const roles = valuesOf(ROLES);
 * // -> readonly ("admin" | "user")[]
 *
 * @param obj Object whose values should be extracted
 * @returns Readonly array of all object values, typed as union of value literals
 */

export function valuesOf<T extends Record<string, unknown>>(obj: T) {
  return Object.values(obj) as readonly ValueOf<T>[];
  // Object.values extracts runtime values.
  // Type assertion restores literal union typing lost by Object.values.
}