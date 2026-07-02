import { Dialog, Button } from '@/components/ui';
import { UsersRoleFilter, UsersStatusFilter, UsersDateFilter} from '../';

export function UsersFiltersDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Dialog.Content>
      <Dialog.Header>
        Filters
      </Dialog.Header>

      <UsersRoleFilter />
      <UsersStatusFilter />
      <UsersDateFilter />

      <Dialog.Footer>
        <Button onClick={onClose}>
          Done
        </Button>
      </Dialog.Footer>
    </Dialog.Content>
  );
}