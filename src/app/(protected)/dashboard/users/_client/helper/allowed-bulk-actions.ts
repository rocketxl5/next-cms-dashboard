import {UserRow } from '../../_domain';

type SelectedUsersProps = {
  selectedUserIds: Set<string>;
  users: UserRow[];
};

export function getSelectedUsers({
  selectedUserIds,
  users,
}: SelectedUsersProps) {
  return users.filter((u) => selectedUserIds.has(u.id));
}
