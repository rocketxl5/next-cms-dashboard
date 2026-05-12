export const size = {
  padding: {
    none: '0',
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  },
  paddingX: {
    none: '0',
    sm: 'px-2',
    md: 'px-4',
    lg: 'px-6',
  },
  paddingY: {
    none: '0',
    sm: 'py-1',
    md: 'py-2',
    lg: 'py-3',
  },
  gap: {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  },
  height: {
    auto: 'h-auto',
    sm: 'h-8',
    md: 'h-9',
    lg: 'h-10',
  },
  width: {
    auto: 'w-auto',
    full: 'w-full',
    fit: 'w-fit',
    square: 'aspect-square p-0 flex items-center justify-center',

    xs: 'w-64',
    sm: 'w-80',
    md: 'w-96', // 384px
    lg: 'w-[28rem]',
    xl: 'w-[32rem]',
  },
  interactive: {
    sm: 'min-h-8',
    md: 'min-h-10',
    lg: 'min-h-12',
  },
  shape: {
    square: 'aspect-square p-0',
    pill: 'rounded-full',
  },
} as const;
