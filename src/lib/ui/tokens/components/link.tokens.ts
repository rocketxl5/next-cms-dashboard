import { color, size } from '../primitives';
import { textAdapter } from '../adapters';

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
    sm: `${size.height.sm} px-3 ${textAdapter.sm}`,
    md: `${size.height.md} px-3 ${textAdapter.base}`,
    lg: `${size.height.lg} px-3 ${textAdapter.lg}`,
  },
  layout: {
    fullWidth: 'w-full justify-start',
    inline: 'inline-flex items-center',
  },
} as const;
