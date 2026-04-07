export const USER_SEARCH_FIELDS = ['name', 'email'] as const;

export type UserSearchField = (typeof USER_SEARCH_FIELDS)[number];