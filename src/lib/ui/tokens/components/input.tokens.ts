import { cn } from '@/lib/utils';
import { size } from '../primitives';
import { borderAdapters, layoutAdapters } from '../adapters';
import { focusTokens } from './focus.tokens';

export const inputTokens = {
  base: `
    rounded-md
    text-sm
    text-foreground
    border
    ${focusTokens.base}
    disabled:opacity-50
    disabled:cursor-not-allowed
  `,

  variant: {
    default: '',
    subtle: `${borderAdapters.color.muted} bg-muted border-muted`,
    ghost: `border-transparent bg-transparent`,
    error: `${borderAdapters.color.destructive} focus:ring-[hsl(var(--destructive))]`,
    success: `${borderAdapters.color.success} focus:ring-[hsl(var(--success))]`,
  },

  border: {
    none: borderAdapters.width.none,
    default: cn(
      borderAdapters.width.hairline,
      borderAdapters.color.default,
      'focus:border-[hsl(var(--border-focus))]',
      'focus:ring-1',
      'focus:ring-[hsl(var(--border-focus))]',
    ),
    subtle: `${borderAdapters.width.hairline} ${borderAdapters.color.strong}`,
    strong: `${borderAdapters.width.thin} ${borderAdapters.color.strong}`,
  },

  height: size.height,

  padding: size.padding,

  layout: {
    block: layoutAdapters.elementWidth.full, // default form usage
    inline: layoutAdapters.elementWidth.auto, // fits content / inline UI
    fit: layoutAdapters.elementWidth.fit, // shrinks to content strictly
    grow: layoutAdapters.elementWidth.grow, // fills available space in flex layouts
    fixed: '', // no width applied (fully controlled externally)
  },
} as const;
