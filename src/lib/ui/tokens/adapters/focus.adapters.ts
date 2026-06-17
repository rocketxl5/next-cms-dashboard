export const focusAdapters = {
  base: `
    focus:outline-none
    focus:ring-1
    focus:ring-inset
  `,

  default: `
    focus:border-[hsl(var(--border-focus))]
    focus:ring-[hsl(var(--border-focus))]
  `,

  destructive: `
    focus:border-[hsl(var(--destructive))]
    focus:ring-[hsl(var(--destructive))]
  `,

  success: `
    focus:border-[hsl(var(--success))]
    focus:ring-[hsl(var(--success))]
  `,
} as const;