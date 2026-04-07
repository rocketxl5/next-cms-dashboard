export type PaginationMeta = {
    total: number;
    hasMore: boolean;
}

export type PaginatedResult<T> = {
    items: T[];
} & PaginationMeta;

export type PaginationParams = {
    limit: number;
    offset: number;
}

export type PaginationState = {
    hasMore: boolean;
} & PaginationParams;

export type QueryParams<TFilters = unknown> = {
    filters?: TFilters;
} & PaginationParams;