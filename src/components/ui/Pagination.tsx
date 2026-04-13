import { Button } from './button';

import { usePagination } from '@/hooks/pagination/usePagination';

import { PaginationMeta } from '@/types/shared';

type PaginationProps = {
  pagination: PaginationMeta;
};

export function Pagination({ pagination }: PaginationProps) {
  const { nextPage, prevPage } = usePagination(pagination);
  const { hasNext, hasPrevious } = pagination;

  return (
    <div className="flex justify-center gap-4">
      <Button variant="link" onClick={prevPage} disabled={!hasPrevious}>
        Previous
      </Button>
      <Button variant="link" onClick={nextPage} disabled={!hasNext}>
        Next
      </Button>
    </div>
  );
}
