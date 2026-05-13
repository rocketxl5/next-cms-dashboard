import { Box } from '../layout';

import { cn } from '@/lib/utils';

type DropdownSelectorProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Selector({ children, className }: DropdownSelectorProps) {
  return (
    <Box className={cn('p-1 gap-1', className)} direction="col">
      {children}
    </Box>
  );
}
