
// export type PaginationMeta = {
//   total: number;
//   hasMore: boolean;
// };
// export type PaginatedResult<T> = {
//     items: T[];
// } & PaginationMeta;

export type PaginationQuery = {
  limit: number;
  offset: number;
};

export type PaginationState = {
  hasMore: boolean;
  total: number;
} & PaginationQuery;

export type QueryParams<TFilters = unknown> = {
  filters?: TFilters;
} & PaginationQuery;