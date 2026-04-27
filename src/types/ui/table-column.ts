import { CellVariants } from '@/lib/ui/variants';
import { TableContext } from './table-context';

export type TableColumn<T, TContext> = {
  key: string;

  header: React.ReactNode | ((ctx: TContext) => React.ReactNode);

  render: (row: T, ctx: TContext) => React.ReactNode;

  // styling (CVA layer)
  variant?: CellVariants['variant'];
  size?: CellVariants['size'];

  // layout layer
  align?: CellVariants['align'];
  width?: CellVariants['width'];
  grow?: CellVariants['grow'];
  overflow?: CellVariants['overflow'];

  // future system hooks
  sortable?: {
    key?: keyof T; // optional override
    compare?: (a: T, b: T) => number;
  };

  filterable?: {
    type?: 'text' | 'select' | 'custom';
    value?: (row: T) => unknown;
    options?: { label: string; value: string }[];
  };
};
