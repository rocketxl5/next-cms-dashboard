export type UserSelectionState = {
  selectedUserIds: Set<string>;
  toggleUserSelection: (id: string) => void;
};