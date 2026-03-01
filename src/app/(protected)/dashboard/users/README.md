users/
  _server/
      actions/
          delete-user.action.ts        ← 'use server'
          edit-user.action.ts          ← 'use server'
          index.ts                     ← 'export actions only to prevent build conflict'
      UsersPage.tsx                    ← Server Component

  _client/
      UsersTable.tsx               ← 'use client'
      users-table.columns.ts       ← client-safe
      badges/
          RoleBadge.tsx
          StatusBadge.tsx
      index.ts                     ← only client exports
      
  _domain/                         ← pure types & domain logic
      base-props.ts    
      derive-status.ts
      table-column.ts
      user-row.ts
      users-column.ts

  _map/                            ← pure mapping
      dashboard-user-map.ts
      user-row-map.ts


// Core eveluation pattern pseudo-logic

const allowedBulkActions = BULK_USER_ACTIONS.filter(action => {
  return selectedUsers.every(user => {
    switch (action.key) {
      case 'edit':
        return canEditUser(currentUser.role, user.role);

      case 'suspend':
        return canSuspendUser(currentUser.role, user.role);

      case 'delete':
        return canDeleteUser(currentUser.role, user.role);

      case 'changeRole':
        return canUpdateUserRole(currentUser.role, user.role);

      default:
        return false;
    }
  });
});

⚠️ Important Detail

if selectedUsers.length === 0 return empty array

No actions allowed.