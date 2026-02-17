import {
  Capability,
  FEATURE_CAPABILITIES,
} from './feature.capabilities';
import { valuesOf } from '@/lib/utils/values-of';
import { DashboardRole } from '@/types/server';

export const SYSTEM_ROLE_CAPABILITIES = {
  SUPER_ADMIN: [
    ...valuesOf(FEATURE_CAPABILITIES.USERS),
    ...valuesOf(FEATURE_CAPABILITIES.CONTENT),
  ] as readonly Capability[],
  ADMIN: [
    ...valuesOf(FEATURE_CAPABILITIES.USERS),
    ...valuesOf(FEATURE_CAPABILITIES.CONTENT),
  ] as readonly Capability[],
  EDITOR: [...valuesOf(FEATURE_CAPABILITIES.CONTENT)] as readonly Capability[],
} as const satisfies Record<
  DashboardRole,
  readonly Capability[]
>;

export type SystemRole = keyof typeof SYSTEM_ROLE_CAPABILITIES;