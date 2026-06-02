export function getLoginRedirectPath(role: string) {
  switch (role) {
    case 'SUPER_ADMIN':
    case 'ADMIN':
    case 'EDITOR':
      return '/dashboard';

    case 'USER':
      return '/account';

    default:
      return '/account';
  }
}
