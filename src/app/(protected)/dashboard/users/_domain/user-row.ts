import { UserStatus } from "./user-status";
import { UserRole } from "./user-role";

export type UserRow = {
  id: string;
  name: string;
  email: string;

  role: UserRole;
  status: UserStatus;

  createdAt: string;
  updatedAt: string;
  /**
   * UI-only flags
   */
  isCurrentUser?: boolean;
};