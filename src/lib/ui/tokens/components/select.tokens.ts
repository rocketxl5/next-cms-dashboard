import { cn } from '@/lib/utils';
import { color, size } from '../primitives';
import {
  borderAdapters,
  layoutAdapters,
  radiusAdapters,
  selectAdapters,
} from '../adapters';
import { focusTokens } from './focus.tokens';

export const selectTokens = {
  base: `
    appearance-none
    rounded-md
    text-sm
    text-foreground
    border
    bg-[hsl(var(--background))]
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

  height: {
    sm: `${size.height.sm}`,
    md: `${size.height.md}`,
    lg: `${size.height.lg}`,
  },

  padding: {
    sm: selectAdapters.sm.padding,
    md: selectAdapters.md.padding,
    lg: selectAdapters.lg.padding,
  },

  paddingX: {
    sm: `${size.paddingX.sm}`,
    md: `${size.paddingX.md}`,
    lg: `${size.paddingX.lg}`,
  },

  paddingY: {
    sm: `${size.paddingY.sm}`,
    md: `${size.paddingY.md}`,
    lg: `${size.paddingY.lg}`,
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
