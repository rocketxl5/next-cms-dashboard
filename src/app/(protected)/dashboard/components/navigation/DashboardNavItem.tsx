'use client';

import { usePathname } from 'next/navigation';

import { Link } from '@/components/ui';

import { isRouteActive } from '@/lib/utils';
import { navIconMap } from '@/lib/ui/navigation/nav-icons';

import { NavItem } from '@/types/ui';

interface DashboardLinkProps {
  item: NavItem;
}

export function DashboardNavItem({ item }: DashboardLinkProps) {
  const pathname = usePathname();

  const isActive = isRouteActive(pathname, item);

  const Icon = item.icon ? navIconMap[item.icon] : null;

  return (
    <Link
      href={item.href}
      variant="contrast"
      active={isActive}
      width="full"
      className="justify-start gap-2 rounded-xl"
    >
      {Icon && <Icon size={18} />}
      {item.label}
    </Link>
  );
}