/**
 * Trust zone: Shared / Contract
 *
 * Shape sent from server to dashboard UI.
 * No passwords, no tokens, no DB internals.
 */

import { DashboardRole } from '../server/dashboard-role';

export type DashboardUserRow = {
  id: string;
  name: string | null;
  email: string;
  role: DashboardRole;
  status: 'ACTIVE' | 'SUSPENDED';
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};
