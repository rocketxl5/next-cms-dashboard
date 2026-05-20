import { color, size } from '../primitives';
import {
  borderAdapters,
  radiusAdapters,
  sizeAdapters,
  textAdapters,
} from '../adapters';

export const linkTokens = {
  base: 'inline-flex items-center transition-colors hover:opacity-90',
  variant: {
    default: `${color.muted.foreground} hover:${color.foreground}`,
    subtle: `${color.muted.foreground} hover:${color.foreground}`,
    info: `${color.info.background} ${color.info.foreground}`,
    // navigation
    nav: `hover:${color.foreground}`,

    // button-like
    primary: `${color.primary.background} ${color.primary.foreground}`,
    success: `${color.success.background} ${color.success.foreground}`,
    contrast: `${color.contrast.background} ${color.contrast.foreground}`,
    muted: `${color.muted.background} ${color.link.muted}`,
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

  height: size.height,
  width: sizeAdapters.width,
  padding: size.padding,
  paddingX: size.paddingX,
  radius: radiusAdapters,
  textSize: textAdapters.size,
} as const;
