import { AppRole } from "@/types/enums";
import { isHigherRole } from "./role-hierarchy";
import { isDashboardRole } from "@/types/server";

export function canActOnUser(
    actorRole: AppRole,
    targetRole: AppRole
) {
    if(!isDashboardRole(actorRole)) return false;

    return isHigherRole(actorRole, targetRole)
}