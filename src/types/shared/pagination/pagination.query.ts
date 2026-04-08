// Input to server

export type PaginationQuery = {
  limit: number;
  offset: number;
};

export type QueryParams<TFilters = unknown> = {
  filters?: TFilters;
} & PaginationQuery;