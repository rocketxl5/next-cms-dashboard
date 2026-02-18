import {
  Capability,
  FEATURE_CAPABILITIES,
} from './feature.capabilities';
import {
  CONTENT_ALL_CAPABILITIES,
  CONTENT_EDITOR_CAPABILITIES,
  USERS_ALL_CAPABILITIES,
  USERS_ADMIN_CAPABILITIES,
} from './role_capabilities';
import { DashboardRole } from '@/types/server';

export const SYSTEM_ROLE_CAPABILITIES = {
  SUPER_ADMIN: [...CONTENT_ALL_CAPABILITIES, ...USERS_ALL_CAPABILITIES],
  ADMIN: [...CONTENT_ALL_CAPABILITIES, ...USERS_ADMIN_CAPABILITIES],
  EDITOR: [...CONTENT_EDITOR_CAPABILITIES],
} as const satisfies Record<DashboardRole, readonly Capability[]>;

export type SystemRole = keyof typeof SYSTEM_ROLE_CAPABILITIES;