// Server response

export type PaginationMeta = {
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

export type PaginatedResult<T> = {
    items: T[];
    pagination: PaginationMeta;
};