import { CreatedAtFilter, UpdatedAtFilter } from './date';

import { UsersToolbarContext } from '../domain/users-dashboard-filters';

export function UsersDateFilter({ disabled, className }: UsersToolbarContext) {
  return (
    <>
      <CreatedAtFilter disabled={disabled} className={className} />
      <UpdatedAtFilter disabled={disabled} className={className} />
    </>
  );
}
