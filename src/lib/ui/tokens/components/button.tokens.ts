import { color, size } from '../primitives';
import {
  borderAdapters,
  controlAdapters,
  radiusAdapters,
  sizeAdapters,
  textAdapters,
} from '../adapters';

export const buttonTokens = {
  base: 'inline-flex items-center justify-center transition-colors hover:opacity-[.95] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  variant: {
    default: `
      ${color.primary.background}
      ${color.primary.foreground}
      ${borderAdapters.color.primary}
      ${borderAdapters.width.hairline}
    `,

    destructive: `
      ${color.destructive.background}
      ${color.destructive.foreground}
      ${borderAdapters.color.destructive}
      ${borderAdapters.width.hairline}
    `,

    success: `
      ${color.success.background}
      ${color.success.foreground}
      ${borderAdapters.color.success}
      ${borderAdapters.width.hairline}
    `,

    warning: `
      ${color.warning.background}
      ${color.warning.foreground}
      ${borderAdapters.color.warning}
      ${borderAdapters.width.hairline}
    `,

    contrast: `
      ${color.contrast.background}
      ${color.contrast.foreground}
      ${borderAdapters.color.foreground}
      ${borderAdapters.width.hairline}
    `,

    dark: `
      ${color.dark.background}
      ${color.dark.foreground}
      ${borderAdapters.color.foreground}
      ${borderAdapters.width.hairline}
    `,

    info: `
      ${color.info.background}
      ${color.info.foreground}
      ${borderAdapters.color.primary}
      ${borderAdapters.width.hairline}
    `,

    link: `
      ${color.link.default}
      ${color.link.foreground}
      border-transparent
      ${borderAdapters.width.hairline}
    `,

    muted: `
      ${color.muted.background}
      ${color.foreground}
      ${borderAdapters.color.subtle}
      ${borderAdapters.width.hairline}
    `,

    control: `
      ${controlAdapters.base}
      ${controlAdapters.state.open}
    `,
  },

  layout: {
    inline: 'w-auto',
    block: 'w-full',
  },

  paddingX: size.paddingX,
  paddingY: size.paddingX,
  height: size.height,
  width: sizeAdapters.width,
  radius: radiusAdapters,
  textSize: textAdapters.size,
  textWeight: textAdapters.weight,
} as const;
