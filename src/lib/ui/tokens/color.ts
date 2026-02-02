/**
 * Semantic color tokens for Tailwind v4 + utilities file setup.
 * These map to the class names defined in your utilities file.
 * Components should consume these tokens — never raw hsl values.
 */

import { AppRole } from '@/types/enums';
import { UserStatus } from '@/types/shared';

export const color = {
  // Button
  primary: {
    background: 'bg-primary',
    foreground: 'text-primary-foreground',
  },
  destructive: {
    background: 'bg-destructive',
    foreground: 'text-destructive-foreground',
  },
  muted: {
    background: 'bg-muted',
    foreground: 'text-muted-foreground',
  },

  // Role badges
  role: {
    SUPER_ADMIN: {
      background: 'bg-role-super-admin',
      foreground: 'text-role-super-admin',
    },
    ADMIN: {
      background: 'bg-role-admin',
      foreground: 'text-role-admin',
    },
    USER: {
      background: 'bg-role-user',
      foreground: 'text-role-user',
    },
  } as Record<AppRole, { background: string; foreground: string }>,

  // Status badge
  status: {
    active: {
      background: 'bg-status-active',
      foreground: 'text-status-active',
    },
    inactive: {
      background: 'bg-muted',
      foreground: 'text-muted-foreground',
    },
    suspended: {
      background: 'bg-status-suspended',
      foreground: 'text-status-suspended',
    },
  } as Record<UserStatus, {background, foreground}>
} as const;
