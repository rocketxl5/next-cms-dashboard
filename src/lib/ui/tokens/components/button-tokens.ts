import { color, size } from '@/lib/ui/tokens/primitives';
import { text } from '@/lib/ui/tokens/adapters';

export const buttonTokens = {
  default: {
    base: `${color.primary.background} ${color.primary.foreground}`,
  },
  destructive: {
    base: `${color.destructive.background} ${color.destructive.foreground}`,
  },
  size: {
    sm: `${text.sm} ${size.padding.sm}`,
    md: size.padding.md,
    lg: `${text.lg} ${size.padding.lg}`,
  },
} as const;
