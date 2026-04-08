// Server response

export type PaginationMeta = {
  total: number;
  hasMore: boolean;
};

export type PaginatedResult<T> = {
    items: T[];
    pagination: PaginationMeta;
};