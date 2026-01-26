import { UserStatus } from './user-status';
import { AppRole } from '@/types/enums';

export type UserRow = {
  id: string;
  name: string | null;
  email: string;
  role: AppRole;
  status: UserStatus;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DashboardUserRow = UserRow;
