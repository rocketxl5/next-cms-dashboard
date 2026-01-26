/**
 * TRUST ZONE — Enums / App invariant (SHARED)
 *
 * Represents:
 * - All roles the application understands
 * - Independent of Prisma (even if values match)
 *
 * Guarantees:
 * - Value is one of the known app roles
 *
 * Does NOT guarantee:
 * - Authorization for any feature
 *
 * LEVEL 1 in type ladder hierarchy
 */

export const APP_ROLES = ['USER', 'ADMIN', 'SUPER_ADMIN'] as const;

/**
 * "USER" | "ADMIN" | "SUPER_ADMIN"
 */
export type AppRole = (typeof APP_ROLES)[number];
