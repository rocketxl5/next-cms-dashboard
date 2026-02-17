import { DashboardRole } from "@/types/server";
import { AppRole } from "@/types/enums";
import { Capability } from "../model/capabilities";
import { hasPermission } from "../has-permission";

/**
 * Creates a dashboard action helper that requires authority checks.
 *
 * Example:
 *   const canEditUser = createAuthorityAction('USER_EDIT');
 */
export function createAuthorityAction(capability: Capability) {
    return function action(
        actorRole: DashboardRole,
        targetRole: AppRole,
    ): boolean {
        return hasPermission(actorRole, capability, {targetRole});
    }
}