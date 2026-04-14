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
  align?: 'left' | 'center' | 'right';
  headerAlign?: 'left' | 'center' | 'right';

  width?: 'auto' | 'sm' | 'md' | 'lg';
  minWidth?: string;
  maxWidth?: string;
  grow?: boolean;

  // future system hooks
  sortable?: boolean;
  filterable?: boolean;
};
