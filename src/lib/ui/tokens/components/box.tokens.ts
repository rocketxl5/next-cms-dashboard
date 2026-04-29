import { radiusAdapters } from '../adapters';
import { borderAdapters } from '../adapters';
import { flex } from '../adapters/layout';
import { size, surface } from '../primitives';

export const boxTokens = {
  base: 'relative',

  layout: {
    flex: 'flex',
    inlineFlex: 'inline-flex',

    row: [
      'flex',
      flex.direction.row,
      flex.align.center,
      flex.justify.start,
    ].join(' '),

    col: [
      'flex',
      flex.direction.col,
      flex.align.start,
      flex.justify.start,
    ].join(' '),

    center: ['flex', flex.align.center, flex.justify.center].join(' '),

    between: ['flex', flex.align.center, flex.justify.between].join(' '),

    start: ['flex', flex.align.start, flex.justify.start].join(' '),

    end: ['flex', flex.align.end, flex.justify.end].join(' '),
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

    divider: [
      borderAdapters.side.bottom,
      borderAdapters.width.hairline,
      borderAdapters.color.muted,
    ].join(' '),
  },

  radius: {
    sm: radiusAdapters.sm,
    md: radiusAdapters.md,
    lg: radiusAdapters.lg,
    full: radiusAdapters.full,
    none: radiusAdapters.none,
  },

  // 🔥 Directly reuse shared size scale
  padding: size.padding,
  paddingX: size.paddingX,
  paddingY: size.paddingY,
  gap: size.gap,

  height: size.height,
  interactive: size.interactive,

  width: size.width,
} as const;
