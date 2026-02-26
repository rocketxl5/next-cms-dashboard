import { createAuthorityAction } from '@/lib/permissions/factories';
import { USER_CAPABILITIES } from '../../model/capabilities/domains';

export const canSuspendUser = createAuthorityAction(
  USER_CAPABILITIES.UPDATE_STATUS,
);