import { Button } from '@/components/ui';

type ClearSearchProps = {
  isActive: boolean;
  onClick: () => void;
};

export function ClearSearch({ isActive, onClick }: ClearSearchProps) {
  return (
    <Button
      height="md"
      textWeight="normal"
      variant="muted"
      onClick={onClick}
      disabled={!isActive}
      aria-label="Clear search and filters"
    >
      Clear Search
    </Button>
  );
}
