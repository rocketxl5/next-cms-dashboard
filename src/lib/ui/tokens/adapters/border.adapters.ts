const width = {
  none: 'border-0',
  hairline: 'border',
  thin: 'border-2',
  thick: 'border-4',
} as const;

const color = {
  default: 'border-base',
  subtle: 'border-subtle',
  muted: 'border-muted',
  strong: 'border-strong',
  primary: 'border-primary',
  success: 'border-success',
  warning: 'border-warning',
  destructive: 'border-destructive',
} as const;

const side = {
  all: '',
  x: 'border-x',
  y: 'border-y',
  top: 'border-t',
  right: 'border-r',
  bottom: 'border-b',
  left: 'border-l',
} as const;

export const borderAdapters = {
  width: width,
  side: side,
  color: color,
} as const;
