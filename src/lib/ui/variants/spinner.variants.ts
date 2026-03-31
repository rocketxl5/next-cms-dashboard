import { cva, type VariantProps } from 'class-variance-authority';
import { spinnerTokens } from '../tokens/components/spinner.tokens';

export const spinnerVariants = cva(spinnerTokens.base, {
  variants: {
    variant: spinnerTokens.variant,
    size: spinnerTokens.size,
  },

  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;