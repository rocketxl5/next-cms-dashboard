// Input to server

export type PaginationQuery = {
  page: number;
  limit: number;
};

export type QueryParams<TFilters = unknown> = {
  filters?: TFilters;
} & PaginationQuery;