import { AppRole } from "../enums";

export type DashboardNavItem = {
    label: string;
    href: string;
    disabled?: boolean;
    allowdRoles?: AppRole[]
}

export const dashboardNav: DashboardNavItem[] = [
    {label: 'Users', href: '/dashboard/users'},
    {label: 'Settings', href: '/dashboard/settings'},
]