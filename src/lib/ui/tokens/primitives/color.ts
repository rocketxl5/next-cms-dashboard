/**
 * Semantic color tokens for Tailwind v4 + utilities file setup.
 * These map to the class names defined in your utilities file.
 * Components should consume these tokens — never raw hsl values.
 */

import { AppRole } from '@/types/enums';
import { UserStatusBadge } from '@/types/shared/user-status-badge';

export const color = {
  // ===== Base / primitive colors =====
  foreground: 'text-foreground', // default text
  background: 'bg-background', // default page background
  border: 'border-muted', // default border

  // Button
  primary: {
    background: 'bg-primary',
    foreground: 'text-primary-foreground',
  },
  destructive: {
    background: 'bg-destructive',
    foreground: 'text-destructive-foreground',
  },
  success: {
    foreground: 'text-success-foreground',
    background: 'bg-success',
  },
  warning: {
    foreground: 'text-warning-foreground',
    background: 'bg-warning',
  },
  info: {
    foreground: 'text-info-foreground',
    background: 'bg-info',
  },
  link: {
    default: 'text-primary hover:underline', // link style
    subtle: 'text-muted-foreground hover:text-foreground', // inline subtle link
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
    EDITOR: {
      background: 'bg-role-editor',
      foreground: 'text-role-editor',
    },
    USER: {
      background: 'bg-role-user',
      foreground: 'text-role-user',
    },
  } satisfies Record<AppRole, { background: string; foreground: string }>,

  // Status badge
  status: {
    active: {
      background: 'bg-status-active',
      foreground: 'text-status-active',
    },
    pending: {
      background: 'bg-muted',
      foreground: 'text-muted-foreground',
    },
    suspended: {
      background: 'bg-status-suspended',
      foreground: 'text-status-suspended',
    },
  } satisfies Record<
    UserStatusBadge,
    { background: string; foreground: string }
  >,
} as const;
