import { cva, type VariantProps } from 'class-variance-authority';
import { surfaceTokens } from '../tokens/components/surface.tokens';

export const surfaceVariants = cva('', {
  variants: {
    /**
     * Structural display only
     */
    display: surfaceTokens.display,

    /**
     * Visual surface styles
     */
    surface: surfaceTokens.surface,

    /**
     * Borders
     */
    border: surfaceTokens.border,

    /**
     * Corner radius
     */
    radius: surfaceTokens.radius,

    /**
     * Padding
     */
    padding: surfaceTokens.padding,
  },

  defaultVariants: {
    display: 'block',

    surface: 'none',
    border: 'none',
    radius: 'none',
    padding: 'none',
  },

  compoundVariants: [
    /**
     * Base card-like container
     */
    {
      surface: 'base',
      border: 'default',
      radius: 'md',
      class: [
        surfaceTokens.surface.base,
        surfaceTokens.border.default,
        surfaceTokens.radius.md,
      ].join(' '),
    },

    /**
     * Muted container grouping
     */
    {
      surface: 'muted',
      radius: 'sm',
      class: [
        surfaceTokens.surface.muted,
        surfaceTokens.radius.sm,
      ].join(' '),
    },
  ],
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;