'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';

import { UserSelectionState } from '@/app/(protected)/dashboard/users/list/_domain';
import { id } from 'date-fns/locale';

type UserSelectionContextValue = UserSelectionState & {
  clearSelection: () => void;

  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  toggleAllUsers: () => void;
  isAllSelected: boolean;
  isIndeterminate: boolean;
};

const UserSelectionContext = createContext<UserSelectionContextValue | null>(
  null,
);

export function UserSelectionProvider({
  children,
  visibleUserIds,
}: {
  children: ReactNode;
  visibleUserIds: string[];
}) {
  const [selectedUserIds, setSelectedUserIds] = useState<Set<string>>(
    new Set(),
  );

  const [isLoading, setIsLoading] = useState(false);

  const toggleUserSelection = useCallback((id: string) => {
    setSelectedUserIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) next.delete(id);
      else next.add(id);

      return next;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedUserIds(new Set());
  }, []);

  // toggle all (based on visible rows)
  const toggleAllUsers = useCallback(() => {
    setSelectedUserIds((prev) => {
      const next = new Set(prev);

      const allSelected =
        visibleUserIds.length > 0 && visibleUserIds.every((id) => next.has(id));

      if (allSelected) {
        // unselect visible
        visibleUserIds.forEach((id) => next.delete(id));
      } else {
        // select visible
        visibleUserIds.forEach((id) => next.add(id));
      }

      return next;
    });
  }, [visibleUserIds]);

  // derived state
  const isAllSelected = useMemo(() => {
    if (visibleUserIds.length === 0) return false;

    return visibleUserIds.every((id) => selectedUserIds.has(id));
  }, [visibleUserIds, selectedUserIds]);

  const isIndeterminate = useMemo(() => {
    if (visibleUserIds.length === 0) return false;

    const someSelected = visibleUserIds.some((id) => selectedUserIds.has(id));

    return someSelected && !isAllSelected;
  }, [visibleUserIds, selectedUserIds, isAllSelected]);

  return (
    <UserSelectionContext.Provider
      value={{
        selectedUserIds,
        toggleUserSelection,
        clearSelection,

        isLoading,
        setIsLoading,

        toggleAllUsers,
        isAllSelected,
        isIndeterminate,
      }}
    >
      {children}
    </UserSelectionContext.Provider>
  );
}

export function useUserSelection() {
  const context = useContext(UserSelectionContext);

  if (!context) {
    throw new Error(
      'useUsersSelection must be used within UserSelectionProvider',
    );
  }

  return context;
}
