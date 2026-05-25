import { NavItem } from '@/types/ui';

export function isRouteActive(pathname: string, item: NavItem) {
  if (item.href === '/dashboard') {
    return pathname === '/dashboard';
  }

  return pathname.startsWith(item.href);
}
