import { UserStatus } from './user-status';
import { DashboardRole } from '@/types/server';

export type UserRow = {
  id: string;
  name: string | null;
  email: string;
  role: DashboardRole;
  status: UserStatus;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DashboardUserRow = Omit<UserRow, 'role'> & {
  role: DashboardRole;
};
