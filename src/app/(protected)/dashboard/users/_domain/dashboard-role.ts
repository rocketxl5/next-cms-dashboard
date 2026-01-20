import { UserRole } from "./user-role";

export type DashboardRole = Exclude<UserRole, 'USER'>

export const DASHBOARD_ROLES: readonly DashboardRole[] = [
    'ADMIN',
    'SUPER_ADMIN'
]
;