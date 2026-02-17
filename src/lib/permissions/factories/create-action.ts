import { DashboardRole } from "@/types/server";
import { Capability } from "../model/capabilities";
import { hasPermission } from "../has-permission";

/**
 * Creates a dashboard action helper that only requires capability checks.
 *
 * Example:
 *   const canViewUsers = createAction('USER_VIEW');
 */
export function createAction(capability: Capability) {
    return function action(role: DashboardRole): boolean {
        return hasPermission(role, capability);
    }
}