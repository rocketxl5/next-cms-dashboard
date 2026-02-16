/**
 * ValueOf<T>
 *
 * Utility type that extracts the union of all value types from an object type `T`.
 *
 * If `T` is an object with string keys, the resulting type is the union of its property values.
 * If `T` is not an object, the resulting type is `never`.
 *
 * Example:
 *   const USER_CAPABILITIES = {
 *     CREATE: 'USER_CREATE',
 *     DELETE: 'USER_DELETE',
 *   } as const;
 *
 *   type UserCapability = ValueOf<typeof USER_CAPABILITIES>;
 *   // UserCapability -> 'USER_CREATE' | 'DELETE'
 *
 * @template T - The object type to extract values from.
 */
export type ValueOf<T> =
  // If T is an object with string keys, return a union of all property values
  T extends Record<string, unknown> ? T[keyof T] : never; // Otherwise, produce 'never' to indicate invalid usage
