export function updateQueryParams(current: URLSearchParams, updates: Record<string, string | undefined>): string {
    const params = new URLSearchParams(current.toString());

    Object.entries(updates).forEach(([key, value]) => {
        if(value === undefined || value === '') {
            params.delete(key);
        } else {
            params.set(key, value);
        }
    });

    return params.toString();

}