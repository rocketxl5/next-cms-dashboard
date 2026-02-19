export const selectedUserIds = new Set<string>();

export const toggleUserSelection = (id: string) => {
    if (selectedUserIds.has(id)) selectedUserIds.delete(id);
    else selectedUserIds.add(id);
} 