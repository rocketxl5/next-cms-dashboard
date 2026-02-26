export const USER_STATUS = ['ACTIVE', 'PENDING', 'SUSPENDED'] as const;

/**
 * "ACTIVE" | "PENDING" | "SUSPENDED"
 */
export type UserStatus = (typeof USER_STATUS)[number];

export const USER_STATUS_TRANSITIONS: Record<UserStatus, UserStatus[]> = {
  ACTIVE: ['SUSPENDED'],
  SUSPENDED: ['ACTIVE'],
  PENDING: ['ACTIVE', 'SUSPENDED'],
};