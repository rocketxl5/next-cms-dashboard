/**
 * TRUST ZONE: Database (Untrusted)
 *  “What did we fetch from the database?”
 *
 * What this type represents:
 * - A projection of the Prisma User table
 * - Exactly the columns needed for dashboard-related logic
 *
 * What this type does NOT guarantee:
 * - Authorization
 * - Valid role
 * - Active status
 *
 * Allowed imports:
 * - Prisma adapters
 *
 * Forbidden imports:
 * - UI
 * - API responses
 * - React components
 *
 * Ground Zero of type ladder hierarchy
 */

import { Role } from '@prisma/client';

export type DatabaseDashboardUser = {
  id: string;
  name: string | null;
  email: string;
  role: Role;
  theme: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};
