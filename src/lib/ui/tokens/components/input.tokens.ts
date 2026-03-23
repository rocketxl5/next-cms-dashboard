import { size } from '../primitives';
import { borderAdapters, layoutAdapters } from '../adapters';

export const inputTokens = {
  base: `
    rounded-md
    text-sm
    text-foreground
    focus:outline-none
    focus:ring-inset
    focus:ring-1
    focus:ring-ring
    disabled:opacity-50
    disabled:cursor-not-allowed
  `,

  variant: {
    default: '',
    subtle: `${borderAdapters.color.muted} bg-muted border-muted`,
    ghost: `border-transparent bg-transparent`,
    error: `${borderAdapters.color.destructive} focus:ring-red-500`,
    success: `${borderAdapters.color.success} focus:ring-green-500`,
  },

  border: {
    none: borderAdapters.width.none,
    default: `${borderAdapters.width.hairline} ${borderAdapters.color.default}`,
    subtle: `${borderAdapters.width.hairline} ${borderAdapters.color.strong}`,
    strong: `${borderAdapters.width.thin} ${borderAdapters.color.strong}`,
  },

  size: {
    sm: `${size.height.sm} ${size.padding.sm}`,
    md: `${size.height.md} ${size.padding.md}`,
    lg: `${size.height.lg} ${size.padding.lg}`,
  },

  layout: {
    block: layoutAdapters.elementWidth.full, // default form usage
    inline: layoutAdapters.elementWidth.auto, // fits content / inline UI
    fit: layoutAdapters.elementWidth.fit, // shrinks to content strictly
    grow: layoutAdapters.elementWidth.grow, // fills available space in flex layouts
    fixed: '', // no width applied (fully controlled externally)
  },

  defaultVariants: {
    size: 'md',
    border: 'default',
    layout: 'block',
  },
} as const;
