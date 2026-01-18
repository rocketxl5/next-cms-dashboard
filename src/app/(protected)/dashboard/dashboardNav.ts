export type DashboardNavItem = {
    label: string;
    href: string;
    disabled?: boolean;
}

export const dashboardNav: DashboardNavItem[] = [
    {label: 'Users', href: '/dashboard/users'},
    {label: 'Settings', href: '/dashboard/settings'},
]