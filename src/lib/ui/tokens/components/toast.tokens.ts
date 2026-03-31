import { color } from '../primitives';

export const toastTokens = {
  base: `
    relative
    rounded-md
    border
    px-3 py-2
    flex items-start gap-3
    text-sm
    shadow-sm
  `,

  variant: {
    default: `
      ${color.primary.background}
      ${color.primary.foreground}
      border-transparent
    `,
    success: `
      ${color.success.background}
      ${color.success.foreground}
      border-transparent
    `,
    destructive: `
      ${color.destructive.background}
      ${color.destructive.foreground}
      border-transparent
    `,
    warning: `
      ${color.warning.background}
      ${color.warning.foreground}
      border-transparent
    `,
    info: `
      ${color.info.background}
      ${color.info.foreground}
      border-transparent
    `,
    muted: `
      ${color.muted.background}
      ${color.muted.foreground}
      border
    `,
  },

  emphasis: {
    solid: '',
    subtle: '', // optional, can stay empty or be defined later
  },
} as const;
