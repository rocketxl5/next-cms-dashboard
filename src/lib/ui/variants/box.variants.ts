import { cva, type VariantProps } from 'class-variance-authority';
import { boxTokens } from '../tokens/components/box.tokens';

export const boxVariants = cva(boxTokens.base, {
  variants: {
    layout: boxTokens.layout,
    surface: boxTokens.surface,
    border: boxTokens.border,
    radius: boxTokens.radius,

    padding: boxTokens.padding,
    paddingX: boxTokens.paddingX,
    paddingY: boxTokens.paddingY,
    gap: boxTokens.gap,

    width: boxTokens.width,
    height: boxTokens.height,
  },

  defaultVariants: {
    layout: 'row',
    surface: 'none',
    border: 'none',
    radius: 'none',
    width: 'auto',
    height: 'auto',
  },

  compoundVariants: [
    // 🔹 Common container pattern (very light opinion)
    {
      surface: 'base',
      border: 'default',
      radius: 'md',
      class: [
        boxTokens.surface.base,
        boxTokens.border.default,
        boxTokens.radius.md,
      ].join(' '),
    },

    // 🔹 Muted panel feel
    {
      surface: 'muted',
      radius: 'sm',
      class: [boxTokens.surface.muted, boxTokens.radius.sm].join(' '),
    },

    // 🔹 Divider usage (forces no padding clash)
    {
      border: 'divider',
      paddingY: 'sm',
      class: [boxTokens.border.divider, boxTokens.paddingY.sm].join(' '),
    },
  ],
});

export type BoxVariants = VariantProps<typeof boxVariants>;
