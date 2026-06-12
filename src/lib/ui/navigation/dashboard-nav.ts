import { NavItem } from "@/types/ui";

export const dashboardNav: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    capability: 'USER_EDIT',
    icon: 'dashboard',
  },
  {
    label: 'Users',
    href: '/dashboard/users',
    capability: 'USER_EDIT',
    icon: 'users',
  },
  {
    label: 'Content',
    href: '/dashboard/content',
    capability: 'CONTENT_EDIT',
    icon: 'content',
  },
];