export const USERS_PARAMS = ['name', 'email', 'role', 'status'] as const;

export type UsersParams = (typeof USERS_PARAMS)[number];

export type SearchUsersParams = {
    search?: string;
    type?: UsersParams
};