import { color, size } from '../primitives';
import { borderAdapters, layoutAdapters, radiusAdapters } from '../adapters';

export const selectTokens = {
  base: `
    appearance-none
    rounded-md
    text-sm
    text-foreground
    bg-background
    focus:outline-none
    focus:ring-inset
    focus:ring-1
    focus:ring-ring
    disabled:opacity-50
    disabled:pointer-events-none
  `,

  variant: {
    default: 'focus:ring-primary',
    subtle: `${color.muted.background} focus:ring-muted`,
    error: `${color.destructive.background} focus:ring-red-500`,
    success: `${color.success.background} focus:ring-green-500`,
  },

  size: {
    sm: `${size.height.sm} ${size.padding.sm} pr-4`,
    md: `${size.height.md} ${size.padding.md} pr-8`,
    lg: `${size.height.lg} ${size.padding.lg} pr-8`,
  },

  border: {
    none: '',
    default: `${borderAdapters.width.hairline} ${borderAdapters.color.default}`,
    subtle: `${borderAdapters.width.hairline} ${borderAdapters.color.muted}`,
    strong: `${borderAdapters.width.hairline} ${borderAdapters.color.strong}`,
  },

  layout: {
    block: `${layoutAdapters.elementWidth.full}`,
    inline: `${layoutAdapters.elementWidth.auto}`,
    fit: `${layoutAdapters.elementWidth.fit}`,
    grow: `${layoutAdapters.elementWidth.grow}`,
    fixed: ``,
  },

  radius: {
    sm: radiusAdapters.sm,
    md: radiusAdapters.md,
    lg: radiusAdapters.lg,
    full: radiusAdapters.full,
    none: radiusAdapters.none,
  },
};
