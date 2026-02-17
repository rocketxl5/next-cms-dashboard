import { DashboardRole } from '@/types/server';
import { SYSTEM_ROLE_CAPABILITIES } from '@/lib/permissions/model/capabilities/system-role.capabilities';
import { Capability } from '@/lib/permissions/model/capabilities';

export function can(role: DashboardRole, capability: Capability): boolean {
  return SYSTEM_ROLE_CAPABILITIES[role].includes(capability);
}
