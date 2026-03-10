import { BulkUserActionKey } from '@/app/(protected)/dashboard/users/list/_domain';
import { bulkDeleteUsers, bulkUpdateUsersStatus } from './actions/bulk';

export async function handleBulkAction(
  actionKey: BulkUserActionKey,
  selectedUserIds: Set<string>,
  clearSelection: () => void,
) {
  if (!selectedUserIds.size) return;

  const userIds = Array.from(selectedUserIds);

  try {
    switch (actionKey) {
      case 'delete':
        await bulkDeleteUsers(userIds);
        console.log('Deleted users:', userIds);
        clearSelection();
        break;

      case 'activate':
        await bulkUpdateUsersStatus(userIds, 'ACTIVE');
        console.log('Activated users:', userIds);
        clearSelection();
        break;

      case 'suspend':
        await bulkUpdateUsersStatus(userIds, 'SUSPENDED');
        console.log('Suspended user:', userIds);
        clearSelection();
        break;

      default:
        console.warn('Unknown bulk action:', actionKey);
    }
  } catch (error) {
    console.error('Bulk action failed:', error);
    throw new Error('Bulk action failed');
  }
}
