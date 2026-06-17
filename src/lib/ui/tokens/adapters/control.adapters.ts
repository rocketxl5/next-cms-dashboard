export const controlAdapters = {
  base: `
    relative
    inline-flex
    h-8
    items-center
    cursor-pointer
    border
    border-base
    rounded-md
    transition-colors
  `,
  state: {
    open: `
      data-[state=open]:border-[hsl(var(--border-focus))]
      data-[state=open]:ring-1
      data-[state=open]:ring-[hsl(var(--border-focus))]
      data-[state=open]:ring-inset
      `,
  },
  open: `
      border-[hsl(var(--border-focus))]
      ring-1
      ring-[hsl(var(--border-focus))]
      ring-inset
      `,
} as const;
