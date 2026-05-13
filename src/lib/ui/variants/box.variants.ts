import { cva, type VariantProps } from 'class-variance-authority';
import { boxTokens } from '../tokens/components/box.tokens';

export const boxVariants = cva(boxTokens.base, {
  variants: {
    // structural
    display: boxTokens.display,
    direction: boxTokens.direction,

    // flex behavior
    align: boxTokens.align,
    justify: boxTokens.justify,

    // ergonomic presets
    layout: boxTokens.layout,

    // visual
    position: boxTokens.position,
    surface: boxTokens.surface,
    border: boxTokens.border,
    radius: boxTokens.radius,

    // spacing
    padding: boxTokens.padding,
    paddingY: boxTokens.paddingY,
    gap: boxTokens.gap,

    // sizing
    width: boxTokens.width,
    height: boxTokens.height,

    interactive: boxTokens.interactive,
  },

  defaultVariants: {
    display: 'flex',
    direction: 'row',

    align: 'center',
    justify: 'start',

    position: 'static',

    surface: 'none',
    border: 'none',

    padding: 'none',
    paddingY: undefined,

    gap: 'sm',

    radius: 'none',

    width: 'auto',
    height: 'auto',
  },

  compoundVariants: [
    // flex direction helpers
    {
      display: 'flex',
      direction: 'row',
      class: [boxTokens.display.flex, boxTokens.direction.row].join(' '),
    },

    {
      display: 'flex',
      direction: 'col',
      class: [boxTokens.display.flex, boxTokens.direction.col].join(' '),
    },

    {
      display: 'inlineFlex',
      direction: 'row',
      class: [boxTokens.display.inlineFlex, boxTokens.direction.row].join(' '),
    },

    {
      display: 'inlineFlex',
      direction: 'col',
      class: [boxTokens.display.inlineFlex, boxTokens.direction.col].join(' '),
    },

    // 🔹 Common container pattern
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

    // 🔹 Divider usage
    {
      border: 'divider',
      paddingY: 'sm',
      class: [boxTokens.border.divider, boxTokens.paddingY.sm].join(' '),
    },
  ],
});

export type BoxVariants = VariantProps<typeof boxVariants>;