import { cva, type VariantProps } from 'class-variance-authority';
import { selectTokens } from '../tokens/components';

export const selectVariants = cva(selectTokens.base, {
  variants: {
    variant: selectTokens.variant,
    height: selectTokens.height,
    padding: selectTokens.padding,
    paddingX: selectTokens.paddingX,
    paddingY: selectTokens.paddingY,
    border: selectTokens.border,
    width: selectTokens.width,
    radius: selectTokens.radius,

    active: {
      true: '',
      false: '',
    },
  },

  defaultVariants: {
    variant: 'default',
    height: 'md',
    padding: 'lg',
    width: 'full',
    border: 'default',
    radius: 'md',
    active: false,
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
