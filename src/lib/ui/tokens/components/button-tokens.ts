import { color, size } from "@/lib/ui/tokens";


export const buttonTokens = {
  default: {
     base: `${color.primary.background} ${color.primary.foreground}`,
  },
  destructive: {
     base: `${color.destructive.background} ${color.destructive.foreground}`,
  },
  size: {
    sm: size.sm,
    md: size.md,
    lg: size.lg
  }
} as const;
