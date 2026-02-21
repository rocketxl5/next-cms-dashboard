users/
  _server/
      actions/
          delete-user.action.ts        ← 'use server'
          edit-user.action.ts          ← 'use server'
      UsersPage.tsx                    ← Server Component
      index.ts                         ← only server exports

  _client/
      UsersTable.tsx               ← 'use client'
      users-table.columns.ts       ← client-safe
      EditUserDialog.tsx           ← client (may call server action)
      badges/
          RoleBadge.tsx
          StatusBadge.tsx
      cells/
          DeleteUserCell.tsx       ← 'use client'
          EditUserCell.tsx         ← 'use client'
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