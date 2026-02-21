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