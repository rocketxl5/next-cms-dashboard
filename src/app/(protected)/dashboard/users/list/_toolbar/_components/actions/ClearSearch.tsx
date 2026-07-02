import { Button } from '@/components/ui';
import { UsersToolbarContext } from '../domain/users-dashboard-filters';

interface ClearSearchProps extends UsersToolbarContext {
  isActive: boolean;
  onClick: () => void;
}

export function ClearSearch({
  isActive,
  onClick,
  className,
}: ClearSearchProps) {
  return (
    <Button
      height="md"
      textWeight="normal"
      variant="muted"
      paddingX="sm"
      className={className}
      onClick={onClick}
      disabled={!isActive}
      aria-label="Clear search and filters"
    >
      Clear Search
    </Button>
  );
}
