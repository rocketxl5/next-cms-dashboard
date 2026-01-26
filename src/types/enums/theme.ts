export const THEME = ['light', 'dark', 'system'] as const;

export type Theme = (typeof THEME)[number];