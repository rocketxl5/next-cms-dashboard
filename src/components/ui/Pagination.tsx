import { Button } from './button';
import { Box } from './layout';

import { usePagination } from '@/hooks/pagination/usePagination';

import { PaginationMeta } from '@/types/shared';

type PaginationProps = {
  pagination: PaginationMeta;
};

export function Pagination({ pagination }: PaginationProps) {
  const { nextPage, prevPage } = usePagination(pagination);
  const { hasNext, hasPrevious } = pagination;

  return (
    <Box className="flex justify-center gap-4 mt-8">
      <Button
        variant="link"
        width="auto"
        textSize="sm"
        onClick={prevPage}
        disabled={!hasPrevious}
      >
        Previous
      </Button>
      <Button
        variant="link"
        width="auto"
        textSize="sm"
        onClick={nextPage}
        disabled={!hasNext}
      >
        Next
      </Button>
    </Box>
  );
}
