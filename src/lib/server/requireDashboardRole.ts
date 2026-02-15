import { SessionUser } from "@/types/shared";
import { requireRole } from "./requireRole";
import { DashboardRole } from "@/types/server";
import { isDashboardRole } from "@/types/server";
import { RequireRoleOptions } from "@/types/shared/require-role-options";

export async function requireDashboardRole(options: RequireRoleOptions) {
  const user = await requireRole(options);

  if (!isDashboardRole(user.role)) {
    throw new Error('Dashboard role required');
  }

  return user as SessionUser & { role: DashboardRole };
}
