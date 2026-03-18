export const formContexts = ['auth', 'dashboard', 'modal'] as const;

export type FormContext = typeof formContexts[number];