export const tableTokens = {
  base: `
      w-full
      table-fixed
      border-separate
      border-spacing-0
    `,

  cell: {
    content: `
    text-center
    `,
  },

  row: {
    base: 'group h-10',
    striped: 'odd:bg-[hsl(var(--muted))]',
    interactive: 'hover:bg-[hsl(var(--muted))]',
    selected: 'bg-[hsl(var(--accent))]',
  },

  wrapper: {
    responsive: 'overflow-x-auto',
  },
} as const;
