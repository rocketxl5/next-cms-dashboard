import { color, size } from '@/lib/ui/tokens/primitives';
import { textAdapters, radiusAdapters } from '@/lib/ui/tokens/adapters';

export const buttonTokens = {
  base: 'inline-flex items-center justify-center font-medium transition-colors hover:opacity-[.95] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',

  variant: {
    default: `${color.primary.background} text-white`,
    destructive: `${color.destructive.background} text-white`,
    success: `${color.success.background} text-white`,
    warning: `${color.warning.background} text-white`,
    info: `${color.info.background} text-white`,
    link: `${color.link.default} ${color.link.subtle}`,
    muted: `${color.muted.background} ${color.muted.foreground} border`,
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
  },
} as const;
