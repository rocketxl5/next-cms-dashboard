import { DashboardRole } from '@/types/server';
import { SYSTEM_ROLE_CAPABILITIES } from '@/types/permissions/system-role.capabilities';
import { Capability } from '@/types/permissions';

export function can(role: DashboardRole, capability: Capability): boolean {
  return SYSTEM_ROLE_CAPABILITIES[role].includes(capability);
}
