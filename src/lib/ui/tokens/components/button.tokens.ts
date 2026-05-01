import { color, size, typography } from '../primitives';
import { radiusAdapters, sizeAdapters } from '../adapters';

export const buttonTokens = {
  base: 'inline-flex items-center justify-center transition-colors hover:opacity-[.95] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',

  variant: {
    default: `${color.primary.background} ${color.primary.foreground}`,
    destructive: `${color.destructive.background} ${color.destructive.foreground}`,
    success: `${color.success.background} ${color.success.foreground}`,
    warning: `${color.warning.background} ${color.warning.foreground}`,
    info: `${color.info.background} ${color.info.foreground}`,
    link: `${color.link.default} ${color.link.foreground}`,
    muted: `${color.muted.background} ${color.foreground} border`,
  },

  layout: {
    inline: 'w-auto',
    block: 'w-full',
  },

  paddingX: size.paddingX,
  paddingY: size.paddingX,
  height: size.height,
  width: sizeAdapters.width,
  radius: radiusAdapters,
  textSize: typography.size,
} as const;
