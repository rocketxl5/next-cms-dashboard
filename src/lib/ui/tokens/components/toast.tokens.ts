export const toastTokens = {
  base: `
    relative
    rounded-md
    border
    px-3 py-2
    flex items-start gap-3
    text-sm
    shadow-sm
  `,

  intent: {
    success: '',
    destructive: '',
    warning: '',
    info: '',
    default: '',
    muted: '',
  },

  emphasis: {
    solid: '',
    subtle: '',
  },
} as const;
