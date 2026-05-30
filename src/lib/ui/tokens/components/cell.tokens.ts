import { size } from '../primitives';

export const cellTokens = {
  base: `
    align-middle
    leading-5
    border-t border-base
    transition-colors
    `,

  content: `
      min-h-10
      flex
      items-center
    `,

  size: {
    sm: 'px-2 text-sm',
    md: 'px-4 text-sm',
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
