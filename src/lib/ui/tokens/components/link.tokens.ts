import { color, size } from '../primitives';
import { borderAdapters, textAdapters, radiusAdapters } from '../adapters';

export const linkTokens = {
  base: 'inline-flex items-center transition-colors',
  variant: {
    default: `${color.muted.foreground} hover:${color.foreground}`,
    subtle: `${color.muted.foreground} hover:${color.foreground}`,
    // navigation
    nav: `hover:${color.foreground}`,

    // button-like
    primary: `${color.primary.background} ${color.primary.foreground} hover:opacity-90`,
    success: `${color.success.background} ${color.success.foreground} hover:opacity-90`,
    muted: `${color.background} ${color.link.muted}`,
    foreground: `${color.muted.background} ${color.link.foreground}`,
  },

  border: {
    none: borderAdapters.width.none,
    default: `${borderAdapters.width.hairline} ${borderAdapters.color.default}`,
    subtle: `${borderAdapters.width.hairline} ${borderAdapters.color.strong}`,
    strong: `${borderAdapters.width.thin} ${borderAdapters.color.strong}`,
  },

  layout: {
    inline: 'w-auto',
    block: 'w-full',
  },

  radius: {
    sm: radiusAdapters.sm,
    md: radiusAdapters.md,
    lg: radiusAdapters.lg,
    full: radiusAdapters.full,
    none: radiusAdapters.none,
  },

  size: {
    sm: `${textAdapters.sm} ${size.height.sm} ${size.padding.sm}`,
    md: `${textAdapters.sm} ${size.height.md} ${size.padding.md}`,
    lg: `${textAdapters.lg} ${size.height.lg} ${size.padding.lg}`,

    iconSm: `${size.height.sm} aspect-square flex items-center justify-center`,
    iconMd: `${size.height.md} aspect-square flex items-center justify-center`,
    iconLg: `${size.height.lg} aspect-square flex items-center justify-center`,
  },
} as const;
