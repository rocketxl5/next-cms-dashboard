import { cn } from '@/lib/utils';
import { color, size } from '../primitives';
import { borderAdapters, layoutAdapters, radiusAdapters } from '../adapters';
import { focusTokens } from './focus.tokens';

export const selectTokens = {
  base: `
    rounded-md
    text-sm
    text-foreground
    border
    ${focusTokens.base}
    disabled:opacity-50
    disabled:pointer-events-none
  `,

  variant: {
    default: '',
    subtle: `${color.muted.background}`,
    error: `${color.destructive.background} focus:ring-[hsl(var(--destructive))]`,
    success: `${color.success.background} focus:ring-[hsl(var(--success))]`,
  },

  size: {
    sm: `${size.height.sm} ${size.padding.sm} pr-4`,
    md: `${size.height.md} ${size.padding.md} pr-8`,
    lg: `${size.height.lg} ${size.padding.lg} pr-8`,
  },

  border: {
    none: '',
    default: cn(
      borderAdapters.width.hairline,
      borderAdapters.color.default,
      'focus:border-[hsl(var(--border-focus))]',
      'focus:ring-1',
      'focus:ring-[hsl(var(--border-focus))]',
    ),
    subtle: `${borderAdapters.width.hairline} ${borderAdapters.color.muted}`,
    strong: `${borderAdapters.width.hairline} ${borderAdapters.color.strong}`,
  },

  layout: {
    block: layoutAdapters.elementWidth.full,
    inline: layoutAdapters.elementWidth.auto,
    fit: layoutAdapters.elementWidth.fit,
    grow: layoutAdapters.elementWidth.grow,
    fixed: '',
  },

  radius: {
    sm: radiusAdapters.sm,
    md: radiusAdapters.md,
    lg: radiusAdapters.lg,
    full: radiusAdapters.full,
    none: radiusAdapters.none,
  },

  focus: {
    true: 'focus:ring-1 focus:ring-ring',
    false: '',
  },
} as const;
