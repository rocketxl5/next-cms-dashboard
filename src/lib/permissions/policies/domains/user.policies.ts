import {
  USER_CAPABILITIES,
  UserCapability,
} from '../../model/capabilities/domains';
import { PolicyDefinition } from '@/types/permissions';

export const USER_POLICIES: Record<UserCapability, PolicyDefinition> = {
  [USER_CAPABILITIES.CREATE]: { capabilities: [USER_CAPABILITIES.CREATE] },
  [USER_CAPABILITIES.DELETE]: { capabilities: [USER_CAPABILITIES.DELETE] },
  [USER_CAPABILITIES.EDIT]: { capabilities: [USER_CAPABILITIES.EDIT] },
  [USER_CAPABILITIES.EDIT_ROLE]: {
    capabilities: [USER_CAPABILITIES.EDIT_ROLE],
    authority: 'ACT_ON_USER',
  },
  [USER_CAPABILITIES.INVITE]: { capabilities: [USER_CAPABILITIES.INVITE] },
  [USER_CAPABILITIES.UPDATE_STATUS]: {
    capabilities: [USER_CAPABILITIES.UPDATE_STATUS],
  },
  [USER_CAPABILITIES.VIEW]: { capabilities: [USER_CAPABILITIES.VIEW] },
};
