import { AppRole } from '@/types/enums';
import { UserStatus } from '@/types/shared';

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
