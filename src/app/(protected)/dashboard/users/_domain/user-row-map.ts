import { Role } from "@prisma/client";
import { UserRow } from "./user-row";
import { deriveUserStatus } from "./derive-user-status";

export function toUserRow(user: {
    id: string;
    name: string | null;
    email: string;
    role: Role;
    isActive: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}): UserRow {
    return {
        id: user.id,
        name: user.name ?? '',
        email: user.email,
        role: user.role,
        status: deriveUserStatus({
            isActive: user.isActive,
            isVerified: user.isVerified,
        }),
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
    }
}