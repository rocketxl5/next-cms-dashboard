import {
  borderAdapters,
  positionAdapters,
  radiusAdapters,
  sizeAdapters,
  flex,
} from '../adapters';
import { size, surface } from '../primitives';

export const boxTokens = {
  base: '',

  display: {
    block: 'block',
    flex: 'flex',
    inlineFlex: 'inline-flex',
    grid: 'grid',
  },

  direction: {
    row: flex.direction.row,
    col: flex.direction.col,
  },

  align: {
    start: flex.align.start,
    center: flex.align.center,
    end: flex.align.end,
    stretch: flex.align.stretch,
    baseline: flex.align.baseline,
  },

  justify: {
    start: flex.justify.start,
    center: flex.justify.center,
    end: flex.justify.end,
    between: flex.justify.between,
    around: flex.justify.around,
    evenly: flex.justify.evenly,
  },

  // optional ergonomic preset
  layout: {
    flex: 'flex',
    inlineFlex: 'inline-flex',

    row: ['flex', flex.direction.row].join(' '),

    col: ['flex', flex.direction.col].join(' '),

    center: ['flex', flex.align.center, flex.justify.center].join(' '),

    between: ['flex', flex.align.center, flex.justify.between].join(' '),
  },

  surface: {
    none: '',
    base: surface.base,
    muted: surface.muted,
    overlay: surface.overlay,
    raised: surface.raised,
  },

  border: {
    none: '',

    default: [
      borderAdapters.side.all,
      borderAdapters.width.hairline,
      borderAdapters.color.default,
    ].join(' '),

    subtle: [
      borderAdapters.side.all,
      borderAdapters.width.hairline,
      borderAdapters.color.subtle,
    ].join(' '),

    muted: [
      borderAdapters.side.all,
      borderAdapters.width.hairline,
      borderAdapters.color.muted,
    ].join(' '),

    strong: [
      borderAdapters.side.all,
      borderAdapters.width.thin,
      borderAdapters.color.strong,
    ].join(' '),

    foreground: [
      borderAdapters.side.bottom,
      borderAdapters.color.foreground,
      borderAdapters.width.hairline,
    ],

    divider: [
      borderAdapters.side.bottom,
      borderAdapters.width.hairline,
      borderAdapters.color.muted,
    ].join(' '),
  },
  gap: sizeAdapters.gap,
  padding: size.padding,
  paddingY: size.paddingY,
  height: size.height,
  width: size.width,
  interactive: size.interactive,
  radius: radiusAdapters,
  position: positionAdapters,
} as const;
