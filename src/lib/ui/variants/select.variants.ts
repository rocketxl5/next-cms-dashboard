import { cva, type VariantProps } from 'class-variance-authority';
import { selectTokens } from '../tokens/components';

export const selectVariants = cva(selectTokens.base, {
  variants: {
    variant: selectTokens.variant,
    uiSize: selectTokens.uiSize,
    border: selectTokens.border,
    layout: selectTokens.layout,
    radius: selectTokens.radius,
    focus: selectTokens.focus,

    active: {
      true: '',
      false: '',
    },
  },

  defaultVariants: {
    variant: 'default',
    uiSize: 'md',
    layout: 'block',
    border: 'default',
    radius: 'md',
    focus: true,
    active: false,
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
