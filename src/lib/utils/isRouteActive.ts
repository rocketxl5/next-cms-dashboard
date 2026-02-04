export function isRouteActive(
  pathname: string,
  href: string,
 rootBoundary: string,
) {

  // Prevent root sections from activating on children
  if (rootBoundary === href) {
    return pathname === href;
  }

  // else
  return pathname === href || pathname.startsWith(`${href}`);
}