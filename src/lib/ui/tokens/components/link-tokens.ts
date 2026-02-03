import { color, size } from '../primitives';

export const linkTokens = {
  default: {
    base: `${color.muted.foreground} hover:${color.foreground}`,
  },
  primary: {
    base: `${color.primary.foreground} hover:opacity-80`,
  },
  nav: {
    base: `rounded-md transition-colors`,
  },
  size: {
    sm: size.padding.sm,
    md: size.padding.md,
    lg: size.padding.lg,
  },
  layout: {
    fullWidth: 'w-full justify-start',
    inline: 'inline-flex items-center',
  },
} as const;
