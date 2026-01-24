export const APP_ROLES = [
    'USER',
    'ADMIN',
    'SUPER_ADMIN'
] as const; 

/**
 * "USER" | "ADMIN" | "SUPER_ADMIN"
 */
export type AppRole = typeof APP_ROLES[number];

/**
 * LEVEL 1 — APP-LEVEL ROLES (SHARED)
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
 */

