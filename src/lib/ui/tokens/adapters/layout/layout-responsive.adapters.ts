export const shell = {
  content: 'flex flex-1 overflow-hidden',
} as const;

export const slot = {
  header: 'w-full shrink-0 flex border-b',

  sidebar: 'w-64 shrink-0 border-r overflow-y-auto',

  main: 'flex-1 min-w-0 overflow-y-auto p-4 md:p-6',
} as const;

export const page = {
  container: 'w-full',
  content: 'space-y-6',
} as const;

export const grid = {
  form: 'grid grid-cols-1 md:grid-cols-2 gap-4',

  cards: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4',

  stats: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4',
} as const;

export const stack = {
  actions: 'flex flex-col sm:flex-row gap-2',

  adaptive: 'flex flex-col md:flex-row gap-4',
} as const;

export const table = {
  mobile: 'md:hidden',
  desktop: 'hidden md:block',

  scroll: 'overflow-x-auto',

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
  belowTablet: 'block md:hidden',
  tabletUp: 'hidden md:block',

  belowDesktop: 'block lg:hidden',
  desktopUp: 'hidden lg:block',
} as const;

export const tableVisibility = {
  mobileOnly: 'table-cell md:hidden',
  tabletUp: 'hidden md:table-cell',
  desktopOnly: 'hidden lg:table-cell',
} as const;
