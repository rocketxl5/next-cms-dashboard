import { useState } from 'react';

export function useUserSelection() {
  const [selectedUserIds, setSelectedUserIds] = useState<Set<string>>(
    new Set(),
  );

  const toggleUserSelection = (id: string) => {
    setSelectedUserIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) next.delete(id);
      else next.add(id);

      return next;
    });
  };

  const clearSelection = () => {
    setSelectedUserIds(new Set());
  };

  const isSelected = (id: string) => {
    return selectedUserIds.has(id);
  };

  return {
    selectedUserIds,
    toggleUserSelection,
    clearSelection,
    isSelected,
  };
}
