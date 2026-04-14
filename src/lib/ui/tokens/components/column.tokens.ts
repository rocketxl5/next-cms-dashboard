import { size } from '../primitives';

export const columnTokens = {
  base: {
    table: 'w-full table-fixed border-collapse',
    row: 'border-t',
    cell: 'px-4 py-2 align-middle',
    header: 'px-4 py-2 text-left font-medium',
  },

  // 👇 layout primitives
  width: {
    auto: '',
    sm: 'w-[80px]',
    md: 'w-[160px]',
    lg: 'w-[240px]',
    xl: 'w-[320px]',
  },

  // 👇 flexible behavior
  grow: {
    true: 'w-full',
    false: '',
  },

  // 👇 overflow behavior
  overflow: {
    truncate: 'truncate',
    wrap: 'whitespace-normal',
    scroll: 'overflow-x-auto',
  },

  // 👇 alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },

  // 👇 density (optional, ties into your size primitives)
  density: {
    sm: `${size.padding.sm}`,
    md: `${size.padding.md}`,
    lg: `${size.padding.lg}`,
  },
} as const;