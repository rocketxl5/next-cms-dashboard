import { cn } from '@/lib/utils';
import { color, size } from '../primitives';
import { borderAdapters, radiusAdapters, selectAdapters } from '../adapters';
import { sizeAdapters } from '@/lib/ui/tokens/adapters/layout';
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

  height: size.height,

  padding: {
    sm: selectAdapters.sm.padding,
    md: selectAdapters.md.padding,
    lg: selectAdapters.lg.padding,
  },

  paddingX: size.paddingX,

  paddingY: size.paddingY,

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
    sizeAdapters,
    fixed: '',
  },

  radius: radiusAdapters,

  focus: {
    true: 'focus:ring-1 focus:ring-ring',
    false: '',
  },
} as const;
