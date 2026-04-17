import { size } from '../primitives';

export const cellTokens = {
  base: {
    cell: `
      align-middle
      px-4 py-2
      border-t border-[hsl(var(--border))]
      group-even:bg-[hsl(var(--muted))]
      transition-colors
    `,
    header: 'px-4 py-1 text-left',
  },

  size: {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-1 text-sm',
    lg: 'px-4 py-3 text-base',
  },

  width: {
    auto: '',
    xs: 'w-[40px]',
    sm: 'w-[80px]',
    md: 'w-[160px]',
    lg: 'w-[240px]',
    xl: 'w-[320px]',
  },

  grow: {
    true: 'w-full',
  },

  overflow: {
    truncate: 'truncate',
    wrap: 'whitespace-normal',
    scroll: 'overflow-x-auto',
  },

  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },

  density: {
    sm: `${size.padding.sm}`,
    md: `${size.padding.md}`,
    lg: `${size.padding.lg}`,
  },
} as const;
