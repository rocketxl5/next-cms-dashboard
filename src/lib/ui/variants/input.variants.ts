import { cva, type VariantProps } from 'class-variance-authority';
import { inputTokens } from '../tokens/components/input.tokens';

export const inputVariants = cva(inputTokens.base, {
  variants: {
    variant: inputTokens.variant,
    layout: inputTokens.layout,
    height: inputTokens.height,
    paddingX: inputTokens.paddingX,
    paddingY: inputTokens.paddingY,
    border: inputTokens.border,
  },

  defaultVariants: {
    variant: 'default',
    height: 'lg',
    paddingX: 'md',
    paddingY: 'sm',
    layout: 'block',
    border: 'default',
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
