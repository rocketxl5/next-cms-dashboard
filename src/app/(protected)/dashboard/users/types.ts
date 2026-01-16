import { Role } from "@prisma/client";

export type UserRow = {
    id: string;
    name: string | null;
    email: string;
    role: Role;
    isActive: boolean;
    createdAt: string;
}