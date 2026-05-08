/**

* Header Component
* ---
*
* Renders the application header based on the current context.
*
* Contexts:
* * public: Unauthenticated user view
* * user: Authenticated user view
* * admin: Admin view
*
* Features:
* * Displays context-specific title
* * Shows theme toggle button
* * Shows sign-out button for authenticated contexts
*
* Props:
* context: AppContext - determines which header to display (default: 'public')
*
* Part of next-cms-template v1.0.0.
  */

import { SignoutBtn, SignInBtn, ToggleThemeBtn } from './button';
import { Box } from './layout';

import type { AppContext } from '@/types/shared';

// Define header titles based on context
const HEADER_TITLES: Record<AppContext, string> = {
  public: 'ACME LOGO', // Title for public context
  user: 'AUTH USER', // Title for authenticated user
  admin: 'ADMIN', // Title for admin user
};

// Props for Header component
type HeaderProps = {
  context: AppContext;
};

/**
 * Header component renders top navigation bar.
 * @param context - Determines header title and buttons to display
 */

export function Header({ context = 'public' }: HeaderProps) {
  const isAuthenticated = context !== 'public'; // Determine if user is authenticated

  return (
    <header className="flex items-center justify-between border-b p-4">
      {/* Display context-specific title */}
      <div className="font-semibold">{HEADER_TITLES[context]}</div>
      <Box>
        {/* Theme toggle button */}
        <ToggleThemeBtn />
        {/* Signout button visible only for authenticated users */}
        {isAuthenticated ? <SignoutBtn /> : <SignInBtn />}
      </Box>
    </header>
  );
}
