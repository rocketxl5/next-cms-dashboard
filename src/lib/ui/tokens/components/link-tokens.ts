import { color, size } from '../primitives';
import { text } from '../adapters';

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
    sm: `${size.height.sm} px-3 ${text.sm}`,
    md: `${size.height.md} px-3 ${text.base}`,
    lg: `${size.height.lg} px-3 ${text.lg}`,
  },
  layout: {
    fullWidth: 'w-full justify-start',
    inline: 'inline-flex items-center',
  },
} as const;
