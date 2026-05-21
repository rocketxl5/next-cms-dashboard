import { inputTokens, focusTokens } from '../tokens/components';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(inputTokens.base, {
  variants: {
    variant: {
      default: cn(inputTokens.variant.default, focusTokens.variant.default),

      subtle: cn(inputTokens.variant.subtle, focusTokens.variant.default),

      ghost: cn(inputTokens.variant.ghost, focusTokens.variant.default),

      error: cn(inputTokens.variant.error, focusTokens.variant.error),

      success: cn(inputTokens.variant.success, focusTokens.variant.success),
    },

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
