import { cva, type VariantProps } from 'class-variance-authority';
import { titleTokens } from '../tokens';

export const titleVariants = cva(titleTokens.base, {
  variants: {
    size: titleTokens.size,
    align: titleTokens.align,
    weight: titleTokens.weight,
    lineHeight: titleTokens.lineHeight,
    truncate: titleTokens.truncate,
  },

  defaultVariants: {
    size: 'lg',
    lineHeight: 'tight',
    weight: 'semibold',
    align: 'left',
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;
