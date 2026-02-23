export const USER_STATUS = ['ACTIVE', 'PENDING', 'SUSPENDED'] as const;

/**
 * "ACTIVE" | "PENDING" | "SUSPENDED"
 */
export type UserStatus = (typeof USER_STATUS)[number];