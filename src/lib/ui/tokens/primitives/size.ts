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
    auto: 'auto',
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  },
  width: {
    auto: 'w-auto',
    full: 'w-full',
    fit: 'w-fit',
    square: 'aspect-square p-0 flex items-center justify-center',
  },
  interactive: {
    sm: 'min-h-8',
    md: 'min-h-10',
    lg: 'min-h-12',
  },
} as const;
