import { cva, type VariantProps } from 'class-variance-authority';
import { buttonTokens } from '../tokens/components/button.tokens';

export const buttonVariants = cva(buttonTokens.base, {
  variants: {
    variant: buttonTokens.variant,
    layout: buttonTokens.layout,
    height: buttonTokens.height,
    paddingX: buttonTokens.paddingX,
    width: buttonTokens.width,
    textSize: buttonTokens.textSize,
    radius: buttonTokens.radius,
  },

  defaultVariants: {
    variant: 'default',
    layout: 'block',
    height: 'md',
    width: 'full',
    paddingX: 'md',
    radius: 'md',
    textSize: 'sm',
  },

  compoundVariants: [
    {
      height: 'md',
      paddingX: 'md',
      textSize: 'md',
      class: [
        buttonTokens.height.sm,
        buttonTokens.paddingX.sm,
        buttonTokens.textSize.sm,
      ].join(' '),
    },
    {
      height: 'md',
      paddingX: 'md',
      textSize: 'md',
      class: [
        buttonTokens.height.md,
        buttonTokens.paddingX.md,
        buttonTokens.textSize.md,
      ].join(' '),
    },
    {
      height: 'md',
      paddingX: 'md',
      textSize: 'md',
      class: [
        buttonTokens.height.lg,
        buttonTokens.paddingX.lg,
        buttonTokens.textSize.lg,
      ].join(' '),
    },

    // square rule
    {
      width: 'square',
      class: 'aspect-square p-0',
    },
  ],
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
