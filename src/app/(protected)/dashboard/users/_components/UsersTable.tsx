import { UserRow } from '../_domain/user-row';

type UsersTableProps = {
  users: UserRow[];
};

export function UsersTable({ users }: UsersTableProps) {
  return <div className="overflow-x-auto rounded-lg border"></div>;
}
