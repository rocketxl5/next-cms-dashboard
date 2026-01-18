'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SideSlot } from '@/components/layout-primitives';
import { dashboardNav } from '../dashboardNav';

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <SideSlot>
      <nav className="flex flex-col gap-1 p-4">
        {/* Dashboard root */}
        <Link
          href="/dashboard"
          className="mb-6 text-sm font-semibold tracking-tight hover:opacity-80"
        >
          Dashboard
        </Link>

        {/* Section navigation */}
        {dashboardNav.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                'rounded-md px-3 text-sm transition-colors',
                isActive
                  ? 'bg-muted font-medium'
                  : 'text-muted-foreground hover:bg-muted',
              ].join(' ')}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </SideSlot>
  );
}
