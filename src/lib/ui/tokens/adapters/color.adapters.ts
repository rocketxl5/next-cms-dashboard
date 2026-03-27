import { color } from "../primitives";

const intent = {
  default: `${color.primary.background} ${color.primary.foreground}`,
  destructive: `${color.destructive.background} ${color.destructive.foreground}`,
  success: `${color.success.background} ${color.success.foreground}`,
  warning: `${color.warning.background} ${color.warning.foreground}`,
  info: `${color.info.background} ${color.info.foreground}`,
  muted: `${color.muted.background} ${color.muted.foreground}`,
} as const;

export const colorAdapters = {
  intent: intent,
} as const;

export type Intent = keyof typeof intent;