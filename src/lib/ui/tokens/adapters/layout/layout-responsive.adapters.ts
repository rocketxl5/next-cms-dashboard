export const visibility = {
  underXl: 'flex xl:hidden',
  underLg: 'flex lg:hidden',
  underMdl: 'flex mdl:hidden',
  underSm: 'flex sm:hidden',
  overXl: 'hidden xl:flex',
  overLg: 'hidden lg:flex',
  overMd: 'hidden md:flex',
  overMdl: 'hidden mdl:flex',
  overSm: 'hidden sm:flex',
  smView: 'hidden sm:block',
  mdView: 'hidden md:block',
  xlView: 'hidden xl:block',
  xxlView: 'hidden 2xl:block',
} as const;

export const tableVisibility = {
  mobileOnly: 'table-cell md:hidden',
  tabletUp: 'hidden md:table-cell',
  desktopOnly: 'hidden lg:table-cell',
} as const;

export const toolbar = {
  root: 'flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between',
  _root: 'flex w-full gap-3 items-center xl:justify-between',
  controls: 'flex flex-col gap-2 lg:flex-row lg:items-center lg:flex-wrap',

  search: 'flex-1 min-w-0 sm:max-w-134',
  filter: 'w-25',
  mobile: 'flex sm:hidden',

  action: 'w-26',
  control: 'w-full lg:w-28',
} as const;

export const shell = {
  content: 'flex flex-1 overflow-hidden',
} as const;

export const slot = {
  header: 'w-full shrink-0 flex border-b',

  sidebar: `hidden xl:block xl:w-64 border-r overflow-y-auto`,

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

  toolbar: 'flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between',
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
