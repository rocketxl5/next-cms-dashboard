import { CellVariants } from '@/lib/ui/variants';
import { TableContext } from './table-context';

export type TableColumn<Row, Context = TableContext<Row>> = {
  key: string;
  header: React.ReactNode;

  render: (row: Row, context: Context) => React.ReactNode;

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
    key?: keyof Row; // optional override
    compare?: (a: Row, b: Row) => number;
  };

  filterable?: {
    type?: 'text' | 'select' | 'custom';
    value?: (row: Row) => unknown;
    options?: { label: string; value: string }[];
  };
};
