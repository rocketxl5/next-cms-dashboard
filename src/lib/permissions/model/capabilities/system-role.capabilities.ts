import { Capability } from './feature.capabilities';
import {
  ALL_CONTENT_CAPABILITIES,
  ALL_USERS_CAPABILITIES,
  OPERATIONAL_CONTENT_CAPABALITIES,
  OPERATIONAL_USERS_CAPABALITIES,
} from './domains';
import { DashboardRole } from '@/types/shared';

export const SYSTEM_ROLE_CAPABILITIES = {
  SUPER_ADMIN: [...ALL_CONTENT_CAPABILITIES, ...ALL_USERS_CAPABILITIES],
  ADMIN: [...ALL_CONTENT_CAPABILITIES, ...OPERATIONAL_USERS_CAPABALITIES],
  EDITOR: [...OPERATIONAL_CONTENT_CAPABALITIES],
} as const satisfies Record<DashboardRole, readonly Capability[]>;

export type SystemRole = keyof typeof SYSTEM_ROLE_CAPABILITIES;