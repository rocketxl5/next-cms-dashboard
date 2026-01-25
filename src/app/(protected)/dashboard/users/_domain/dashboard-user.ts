import { AppRole } from "@/types/enums";
import { DashboardRole, isDashboardRole } from "@/types/server";

export function isDashboardUserRole(role: AppRole): role is DashboardRole {
  return isDashboardRole(role);
}
