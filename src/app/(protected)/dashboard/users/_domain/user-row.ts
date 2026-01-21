import { UserStatus } from './user-status';
import { Role } from '@prisma/client';

export type UserRow = {
  id: string;
  name: string | null;
  email: string;
  role: Role;
  status: UserStatus;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

import { DashboardRole } from './dashboard-role';

export type DashboardUserRow = Omit<UserRow, 'role'> & {
  role: DashboardRole;
};
