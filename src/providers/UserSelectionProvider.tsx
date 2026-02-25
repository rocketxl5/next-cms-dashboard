'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

type UserSelectionContextValue = {
  selectedUserIds: Set<string>;
  toggleUserSelection: (id: string) => void;
  isSelected: (id: string) => void;
  clearSelection: () => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
};

const UserSelectionContext = createContext<UserSelectionContextValue | null>(
  null,
);

export function UserSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedUserIds, setSelectedUserIds] = useState<Set<string>>(
    new Set(),
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleUserSelection = useCallback((id: string) => {
    setSelectedUserIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) next.delete(id);
      else next.add(id);

      return next;
    });

    // atomic dropdown close
    setIsDropdownOpen(false);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedUserIds(new Set());
    setIsDropdownOpen(false);
  }, []);

  const isSelected = useCallback(
    (id: string) => {
      selectedUserIds.has(id);
    },
    [selectedUserIds],
  );

  return (
    <UserSelectionContext.Provider
      value={{
        selectedUserIds,
        isDropdownOpen,
        isSelected,
        clearSelection,
        setIsDropdownOpen,
        toggleUserSelection,
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
