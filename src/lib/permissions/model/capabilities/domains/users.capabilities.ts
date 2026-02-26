import { ValueOf } from "@/types/utils/value-of";

export const USER_CAPABILITIES = {
  CREATE: 'USER_CREATE',
  DELETE: 'USER_DELETE',
  EDIT: 'USER_EDIT',
  EDIT_ROLE: 'USER_EDIT_ROLE',
  INVITE: 'USER_INVITE',
  UPDATE_STATUS: 'USER_UPDATE_STATUS',
  VIEW: 'USER_VIEW',
} as const;

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
