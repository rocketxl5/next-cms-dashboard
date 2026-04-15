import { cva, type VariantProps } from 'class-variance-authority';
import { cellTokens } from '../tokens';

export const cellVariants = cva(cellTokens.base.cell, {
  variants: {
    variant: {
      text: '',
      numeric: 'text-right tabular-nums',
      badge: 'text-center',
      actions: 'text-right whitespace-nowrap',
      checkbox: 'w-[48px]',
    },

    size: cellTokens.size,
    width: cellTokens.width,
    grow: cellTokens.grow,
    overflow: cellTokens.overflow,
    align: cellTokens.align,
  },

  defaultVariants: {
    variant: 'text',
    size: 'md',
    overflow: 'truncate',
  },
});

export type CellVariants = VariantProps<typeof cellVariants>;
