export const spinnerTokens = {
  base: 'inline-flex items-center justify-center animate-spin',

  size: {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  },

  variant: {
    default: 'text-primary',
    muted: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-success',
    destructive: 'text-destructive',
  },
} as const;
