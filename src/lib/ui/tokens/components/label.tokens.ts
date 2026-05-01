import { typography } from '../primitives';

export const labelTokens = {
  base: 'inline-block',

  variant: {
    default: 'text-sm font-medium leading-normal',
    strong: 'text-sm font-semibold leading-normal',
    subtle: 'text-sm font-normal leading-normal',
  },

  state: {
    enabled: '',
    disabled: 'opacity-50 cursor-not-allowed',
  },

  textSize: typography.size,
} as const;