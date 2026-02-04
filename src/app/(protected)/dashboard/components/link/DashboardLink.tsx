/**
 * DashboardLink
 *
 * Domain wrapper around the UI Link primitive for dashboard navigation.
 *
 * Responsibilities:
 * ------------------------------------------------------------
 * • Determines whether the current route is "active"
 * • Applies navigation-specific styling via CVA `active` variant
 * • Encapsulates route matching logic so Sidebar stays declarative
 *
 * Why isActive Logic Exists:
 * ------------------------------------------------------------
 * Dashboard navigation contains both:
 *
 * 1. Root route ("/dashboard")
 * 2. Nested section routes ("/dashboard/users", "/dashboard/settings", etc.)
 *
 * A simple `pathname.startsWith(href)` check is NOT sufficient because:
 *
 * Example:
 *   pathname = "/dashboard/users"
 *
 *   "/dashboard/users".startsWith("/dashboard") → TRUE
 *
 * This would incorrectly keep the root Dashboard link highlighted
 * when a child section is selected.
 *
 * Therefore:
 *
 * • Root dashboard link requires EXACT matching
 * • Section links require PREFIX matching to stay active when inside nested pages
 *
 * Matching Rules:
 * ------------------------------------------------------------
 *
 * Root link:
 *   Active ONLY when pathname exactly equals "/dashboard"
 *
 * Section links:
 *   Active when:
 *     pathname === href
 *     OR
 *     pathname starts with `${href}/`
 *
 * The trailing slash check prevents accidental matches like:
 *
 *   "/dashboard/user" matching "/dashboard/users"
 *
 * CVA Integration:
 * ------------------------------------------------------------
 * `isActive` is passed to the Link primitive which forwards it to
 * `linkVariants()`. Compound variants then apply active navigation styling.
 *
 * This keeps styling logic inside the design system instead of the component.
 */

'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/components/ui/link/Link';
import { isRouteActive } from '@/lib/utils/isRouteActive';

interface DashboardLinkProps {
  href: string;
  children: React.ReactNode;
}

export function DashboardLink({ href, children }: DashboardLinkProps) {
  const pathname = usePathname();

  /**
   * Determines active navigation state.
   */
  const isActive = isRouteActive(pathname, href, '/dashboard');

  return (
    <Link href={href} variant="nav" active={isActive}>
      {children}
    </Link>
  );
}
