import { color } from '../primitives';
import { colorAdapters } from './color.adapters';

export const surfaceAdapters = {
  solid: colorAdapters.intent,
  subtle: {
    default: `
      ${color.primary.background}/10
      text-primary
      border border-primary/30
    `,
    success: `
      ${color.success.background}/10
      text-success
      border border-success/30
    `,
    destructive: `
      ${color.destructive.background}/10
      text-destructive
      border border-destructive/30
    `,
    warning: `
      ${color.warning.background}/10
      text-warning
      border border-warning/30
    `,
    info: `
      ${color.muted.background}
      text-foreground
      border border-base
    `,
    muted: `
      ${color.muted.background}
      text-muted-foreground
      border border-base
    `,
  },
} as const;
