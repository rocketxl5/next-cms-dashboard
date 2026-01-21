/**
 * UserStatus
 * ----------
 * Domain-level user lifecycle state as interpreted by the application.
 *
 * This is a derived concept.
 * It is NOT stored directly in the database.
 */

export type UserStatus = 'active' | 'inactive' | 'suspended';
