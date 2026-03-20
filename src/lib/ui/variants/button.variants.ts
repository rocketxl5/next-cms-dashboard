import { cva, type VariantProps } from 'class-variance-authority';
import { buttonTokens } from '../tokens/components/button.tokens';

export const buttonVariants = cva(buttonTokens.base, {
  variants: {
    variant: buttonTokens.variant, // now points to the correct variant object
    size: buttonTokens.size,
    radius: buttonTokens.radius,
    layout: buttonTokens.layout,
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    radius: 'md',
    layout: 'inline',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
