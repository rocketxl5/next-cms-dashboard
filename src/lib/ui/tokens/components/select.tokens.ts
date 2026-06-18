import { cn } from '@/lib/utils';
import { color, size } from '../primitives';
import {
  borderAdapters,
  focusAdapters,
  radiusAdapters,
  selectAdapters,
  sizeAdapters,
} from '../adapters';

export const selectTokens = {
  base: `
    appearance-none
    rounded-md
    text-sm
    text-foreground
    border
    bg-[hsl(var(--background))]
    ${focusAdapters.base}
    disabled:opacity-50
    disabled:pointer-events-none
  `,

  variant: {
    default: focusAdapters.default,
    subtle: `${color.muted.background} ${focusAdapters.default}`,
    error: `${color.destructive.background} ${focusAdapters.destructive}`,
    success: `${color.success.background} ${focusAdapters.success}`,
  },

  height: size.height,
  width: sizeAdapters.width,

  padding: {
    sm: selectAdapters.sm.padding,
    md: selectAdapters.md.padding,
    lg: selectAdapters.lg.padding,
  },

  paddingX: size.paddingX,

  paddingY: size.paddingY,

  border: {
    none: '',
    default: cn(borderAdapters.width.hairline, borderAdapters.color.default),
    subtle: `${borderAdapters.width.hairline} ${borderAdapters.color.muted}`,
    strong: `${borderAdapters.width.hairline} ${borderAdapters.color.strong}`,
  },

  radius: {
    sm: radiusAdapters.sm,
    md: radiusAdapters.md,
    lg: radiusAdapters.lg,
    full: radiusAdapters.full,
    none: radiusAdapters.none,
  },
} as const;
