// name | email
import { UserSearchField, USER_SEARCH_FIELDS } from "@/types/shared";
import { AppRole, APP_ROLES, UserStatus, USER_STATUS } from "@/types/enums";

import { ParsedSearchUsersParams, PaginationQuery } from "@/types/shared";

export type UsersQuery = {
    query: PaginationQuery;
    filters: ParsedSearchUsersParams;
};

type Params = | URLSearchParams | Record<string, string | string[] | undefined>;

export function parseUsersQuery(params?: Params): UsersQuery {
    // console.log('params', params);
    
    const get = (key: string): string | undefined => {
        if(!params) return;

        if(params instanceof URLSearchParams) {
            return params.get(key) ?? undefined;
        }

        const value = params[key];
        if(typeof value === 'string') return value;
        if(Array.isArray(value)) return value[0];
        return undefined;
    }

    // pagination
    const page = Math.max(1, Number(get('page') ?? 1));
    const limit = Math.max(1, Number(get('limit') ?? 5));

    // filters
    const search = get('search');
    const type = get('type');
    const role = get('role');
    const status = get('status');

    return {
        query: {page, limit}, 

        filters: {
            search: search ?? '',

            type: 
                type && USER_SEARCH_FIELDS.includes(type as UserSearchField)
                ? (type as UserSearchField)
                : 'email',

            role: 
                role && APP_ROLES.includes(role as AppRole)
                ? (role as AppRole)
                : undefined,

            status: 
                status && USER_STATUS.includes(status as UserStatus)
                ? (status as UserStatus)
                : undefined,
        },
    };
}