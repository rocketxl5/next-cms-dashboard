export const surfaceTokens = {
  display: {
    block: 'block',
    flex: 'flex',
    inlineFlex: 'inline-flex',
  },

  surface: {
    none: '',
    base: 'bg-surface',
    muted: 'bg-muted',
  },

  border: {
    none: '',
    default: 'border border-base',
  },

  radius: {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
  },

  padding: {
    none: '',
    sm: 'p-2',
    md: 'p-4',
  },
} as const;