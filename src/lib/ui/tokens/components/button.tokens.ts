import { color, size } from '@/lib/ui/tokens/primitives';
import { textAdapter, radiusAdapter } from '@/lib/ui/tokens/adapters';

export const buttonTokens = {
  base: "inline-flex items-center justify-center font-medium transition-colors hover:opacity-[.95] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",

  default: {
    base: `${color.primary.background} ${color.primary.foreground}`,
  },

  destructive: {
    base: `${color.destructive.background} ${color.destructive.foreground}`,
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
  },

  size: {
    sm: `${textAdapter.sm} ${size.height.sm} ${size.padding.sm}`,
    md: `${textAdapter.sm} ${size.height.md} ${size.padding.md}`,
    lg: `${textAdapter.lg} ${size.height.lg} ${size.padding.lg}`,
  },
} as const;
