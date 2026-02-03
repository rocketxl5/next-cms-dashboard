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
    <Link href={href} className={isActive ? 'bg-muted font-medium' : undefined}>
      {children}
    </Link>
  );
}
