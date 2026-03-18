import { size } from '../primitives';

export const inputTokens = {
  base: '',
  size: {
    sm: `${size.height.sm} ${size.padding.sm}`,
    md: `${size.height.md} ${size.padding.md}`,
    lg: `${size.height.lg} ${size.padding.lg}`,
  },
  layout: {
    block: 'w-full', // default form usage
    inline: 'w-auto', // fits content / inline UI
    fit: 'w-fit', // shrinks to content strictly
    grow: 'flex-1 min-w-0', // fills available space in flex layouts
    fixed: '', // no width applied (fully controlled externally)
  },
} as const;
