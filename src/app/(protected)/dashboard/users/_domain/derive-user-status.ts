import { UserStatus } from "./user-status";

type UserFlags = {
    isActive: boolean;
    isVerified: boolean;
}

export function deriveUserStatus(flags: UserFlags): UserStatus {
    if(!flags.isActive) return 'inactive';
    if(!flags.isVerified) return 'suspended';
    return 'active';
}