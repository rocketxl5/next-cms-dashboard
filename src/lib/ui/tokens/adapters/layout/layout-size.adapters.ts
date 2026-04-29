export const gap = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
} as const;

export const width = {
  full: 'w-full',
  auto: 'w-auto',
  fit: 'w-fit',
  grow: 'flex-1 min-w-0',

  // optional (safe here, not in components)
  '1/4': 'w-1/4',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
  '2/3': 'w-2/3',
} as const;
