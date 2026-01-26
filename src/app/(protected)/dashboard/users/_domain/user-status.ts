/**
 * UserStatus
 * ----------
 * Domain-level user lifecycle state as interpreted by the application.
 *
 * This is a derived concept.
 * It is NOT stored directly in the database.
 */

import { UserStatus } from '@/types/shared';

type UserFlags = {
  isActive: boolean;
  isVerified: boolean;
};

export function deriveUserStatus(flags: UserFlags): UserStatus {
  if (!flags.isActive) return 'inactive';
  if (!flags.isVerified) return 'suspended';
  return 'active';
}