import { cva, type VariantProps } from 'class-variance-authority';
import { cellTokens } from '../tokens';

export const cellVariants = cva(cellTokens.base.cell, {
  variants: {
    variant: {
      text: 'truncate',
      flexible: 'truncate w-full',
      numeric: 'text-right tabular-nums',
      badge: 'text-center',
      actions: 'text-right whitespace-nowrap',
      checkbox: 'w-[48px]',
    },

    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-4 py-3 text-base',
    },
  },

  defaultVariants: {
    variant: 'text',
    size: 'md',
  },
});

export type CellVariants = VariantProps<typeof cellVariants>;