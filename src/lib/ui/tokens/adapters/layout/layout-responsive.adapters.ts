export const page = {
  container: 'w-full max-w-7xl mx-auto',
  content: 'space-y-6',
} as const;

export const sidebar = {
  desktop: 'hidden lg:flex',
  mobile: 'lg:hidden',
} as const;

export const grid = {
  form: 'grid grid-cols-1 md:grid-cols-2 gap-4',

  cards: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4',

  stats: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4',
} as const;

export const stack = {
  actions: 'flex flex-col sm:flex-row gap-2',

  responsive: 'flex flex-col md:flex-row gap-4',
} as const;

export const table = {
  mobile: 'md:hidden',
  desktop: 'hidden md:block',

  minWidth: {
    sm: 'min-w-[640px]',
    md: 'min-w-[800px]',
    lg: 'min-w-[1200px]',
  },

  stickyColumn: 'sticky left-0 bg-background z-10',
} as const;

export const dialog = {
  content: 'w-full max-w-lg',
  wide: 'w-full max-w-2xl',
} as const;

export const visibility = {
  mobileOnly: 'block md:hidden',
  tabletUp: 'hidden md:block',
  desktopOnly: 'hidden lg:block',
} as const;

export const tableVisibility = {
  mobileOnly: 'table-cell md:hidden',
  tabletUp: 'hidden md:table-cell',
  desktopOnly: 'hidden lg:table-cell',
} as const;
