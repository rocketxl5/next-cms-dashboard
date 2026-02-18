import { FEATURE_CAPABILITIES, Capability } from "../feature.capabilities"
import { valuesOf } from "@/lib/utils";

// SUPER_ADMIN USERS capabilities 
export const USERS_ALL_CAPABILITIES = [
    ...valuesOf(FEATURE_CAPABILITIES.USERS)
] as const satisfies readonly Capability[];

// ADMIN USERS capabilities (all - 1)
export const USERS_ADMIN_CAPABILITIES = [
    FEATURE_CAPABILITIES.USERS.SUSPEND,
    FEATURE_CAPABILITIES.USERS.EDIT,
    FEATURE_CAPABILITIES.USERS.CREATE,
    FEATURE_CAPABILITIES.USERS.VIEW,
    FEATURE_CAPABILITIES.USERS.INVITE,
] as const satisfies readonly Capability[];

//      USERS
//   CREATE: 'USER_CREATE',
//   DELETE: 'USER_DELETE',
//   EDIT: 'USER_EDIT',
//   EDIT_ROLE: 'USER_EDIT_ROLE',
//   INVITE: 'USER_INVITE',
//   SUSPEND: 'USER_SUSPEND',
//   VIEW: 'USER_VIEW',