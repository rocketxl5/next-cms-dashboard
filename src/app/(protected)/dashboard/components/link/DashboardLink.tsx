'use client';

import { usePathname } from 'next/navigation';
import { LinkVariants } from '@/lib/ui/variants';
import { Link } from '@/components/ui/link/Link';

interface DashboardLinkProps extends LinkVariants {
  href: string;
  children: React.ReactNode;
}

export function DashboardLink({ href, children }: DashboardLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === '/dashboard' ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} variant="nav" active={isActive}>
      {children}
    </Link>
  );
}
