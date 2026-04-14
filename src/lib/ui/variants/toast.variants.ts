import { cva, type VariantProps } from 'class-variance-authority';
import { toastTokens } from '../tokens/components/toast.tokens';

export const toastVariants = cva(toastTokens.base, {
  variants: {
    variant: toastTokens.variant,
    emphasis: toastTokens.emphasis,
  },

  defaultVariants: {
    variant: 'info',
    emphasis: 'solid',
  },
});

export type ToastVariants = VariantProps<typeof toastVariants>;
