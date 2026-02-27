import { ValueOf } from "@/types/utils/value-of";
import { Capability } from '../feature.capabilities';

export const USER_CAPABILITIES = {
  CREATE: 'USER_CREATE',
  EDIT: 'USER_EDIT',
  INVITE: 'USER_INVITE',
  UPDATE_STATUS: 'USER_UPDATE_STATUS',
  VIEW: 'USER_VIEW',
  EDIT_ROLE: 'USER_EDIT_ROLE',
  DELETE: 'USER_DELETE',
} as const;

export const OPERATIONAL_USERS_CAPABALITIES = [
  USER_CAPABILITIES.CREATE,
  USER_CAPABILITIES.EDIT,
  USER_CAPABILITIES.INVITE,
  USER_CAPABILITIES.UPDATE_STATUS,
  USER_CAPABILITIES.VIEW,
] as const satisfies readonly Capability[];

export const ALL_USERS_CAPABILITIES = Object.values(
  USER_CAPABILITIES,
) as readonly Capability[];

// union of all allowed user-related permission values
export type UserCapability = ValueOf<typeof USER_CAPABILITIES>;

// type UserCapability =
//   | "USER_CREATE"
//   | "USER_DELETE"
//   | "USER_EDIT"
//   | "USER_EDIT_ROLE"
//   | "USER_INVITE"
//   | "UPDATE_STATUS"
//   | "USER_VIEW";
