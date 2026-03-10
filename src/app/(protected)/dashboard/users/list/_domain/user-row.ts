import { AppRole, UserStatus } from '@/types/enums';

export type UserRow = {
  id: string;
  name: string | null;
  email: string;
  role: AppRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
};
