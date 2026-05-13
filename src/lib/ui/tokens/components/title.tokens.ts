import { textAdapters } from '../adapters';

export const titleTokens = {
  base: 'tracking-tight text-foreground',

  size: textAdapters.size,
  align: textAdapters.align,
  weight: textAdapters.weight,
  lineHeight: textAdapters.lineHeight,

  truncate: {
    true: 'truncate',
  },
} as const;
