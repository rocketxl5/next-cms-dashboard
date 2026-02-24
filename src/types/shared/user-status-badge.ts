import { UserStatus } from "../enums";

export type UserStatusBadge = 'active' | 'pending' | 'suspended';

export const MAP_USER_STATUS: Record<UserStatus, string> = {
    ACTIVE: 'active',
    PENDING: 'pending',
    SUSPENDED: 'suspended',
};