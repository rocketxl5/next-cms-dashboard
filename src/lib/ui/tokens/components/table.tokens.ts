import { size } from '../primitives';

export const tableTokens = {
  base: {
    table: 'w-full table-fixed border-separate border-spacing-0',
    row: 'group',
    headerRow: `${size.height.md}`,
    body: '',
  },
} as const;
