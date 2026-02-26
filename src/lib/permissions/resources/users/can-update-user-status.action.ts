import { AppRole, UserStatus } from "@/types/enums";
import { DashboardRole } from "@/types/shared";
import { hasPermission } from "../../has-permission";
import { USER_CAPABILITIES } from "../../model/capabilities/domains";
import { isValidStatusTransition } from "../../evaluation";

export function canUpdateUserStatus(
    actorRole: DashboardRole,
    targetRole: AppRole,
    currentStatus: UserStatus,
    nextStatus: UserStatus,
) {
    const context = {targetRole, currentStatus, nextStatus}
    const hasDomainAuthority = hasPermission(
        actorRole,  USER_CAPABILITIES.UPDATE_STATUS,
        context
    );

    if(!hasDomainAuthority) return false;

    if(!isValidStatusTransition(currentStatus, nextStatus)) return false;

    return true;
}