import { color, size } from '../primitives';
import { textAdapter, radiusAdapter } from '../adapters';

export const linkTokens = {
  base: 'inline-flex items-center transition-colors',
  variant: {
    default: `${color.muted.foreground} hover:${color.foreground}`,
    primary: `${color.primary.foreground} hover:opacity-80`,
    subtle: `${color.muted.foreground} hover:${color.foreground}`,
    // navigation
    nav: `hover:${color.foreground}`,

    // button-like
    button: `${color.primary.background} text-white hover:opacity-[.95]`,
    muted: `${color.muted.background} ${color.muted.foreground}`,
  },

  layout: {
    inline: 'w-auto',
    block: 'w-full',
  },

  radius: {
    sm: radiusAdapter.sm,
    md: radiusAdapter.md,
    lg: radiusAdapter.lg,
    full: radiusAdapter.full,
    none: radiusAdapter.none,
  },

  size: {
    sm: `${textAdapter.sm} ${size.height.sm} ${size.padding.sm}`,
    md: `${textAdapter.sm} ${size.height.md} ${size.padding.md}`,
    lg: `${textAdapter.lg} ${size.height.lg} ${size.padding.lg}`,
  },
} as const;
