import { size } from '../primitives';
import { borderAdapters } from '../adapters';
import { sizeAdapters } from '@/lib/ui/tokens/adapters/layout';
import { focusAdapters } from '../adapters';

export const inputTokens = {
  base: `
    rounded-md
    text-foreground
    ${focusAdapters.base}
    disabled:opacity-50
    disabled:cursor-not-allowed
  `,

  variant: {
    default: borderAdapters.color.default,

    subtle: `
    ${borderAdapters.color.muted}
    bg-muted
  `,

    ghost: `
    border-transparent
    bg-transparent
  `,

    error: borderAdapters.color.destructive,

    success: borderAdapters.color.success,
  },

  border: {
    none: borderAdapters.width.none,

    default: borderAdapters.width.hairline,

    subtle: borderAdapters.width.hairline,

    strong: borderAdapters.width.thin,
  },

  height: size.height,
  paddingX: size.paddingX,
  paddingY: size.paddingY,

  layout: {
    block: sizeAdapters.width.full, // default form usage
    inline: sizeAdapters.width.auto, // fits content / inline UI
    fit: sizeAdapters.width.fit, // shrinks to content strictly
    grow: sizeAdapters.width.grow, // fills available space in flex layouts
  },
} as const;
