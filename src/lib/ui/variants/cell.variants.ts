import { cva, type VariantProps } from 'class-variance-authority';
import { cellTokens } from '../tokens';

export const cellVariants = cva(cellTokens.base, {
  variants: {
    preset: {
      text: 'text-left',

      numeric: `
        text-right
        tabular-nums
      `,

      badge: `
        text-center
        whitespace-nowrap
      `,

      actions: `
        text-center
        whitespace-nowrap
      `,

      checkbox: `
        w-[48px]
        text-center
        whitespace-nowrap
      `,
    },

    size: cellTokens.size,
    width: cellTokens.width,
    grow: cellTokens.grow,
    overflow: cellTokens.overflow,
    align: cellTokens.align,
    stricky: cellTokens.sticky,
  },

  defaultVariants: {
    preset: 'text',
    size: 'md',
    width: 'md',
    overflow: 'truncate',
  },
});

export type CellVariants = VariantProps<typeof cellVariants>;
