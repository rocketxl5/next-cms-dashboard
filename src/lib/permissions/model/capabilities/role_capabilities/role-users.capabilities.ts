import { FEATURE_CAPABILITIES, Capability } from "../feature.capabilities"
import { valuesOf } from "@/lib/utils";

// SUPER_ADMIN USERS capabilities 
export const USERS_ALL_CAPABILITIES = [
    ...valuesOf(FEATURE_CAPABILITIES.USERS)
] as const satisfies readonly Capability[];

// ADMIN USERS capabilities (all - 1)
export const USERS_ADMIN_CAPABILITIES = [
    FEATURE_CAPABILITIES.USERS.CREATE,
    FEATURE_CAPABILITIES.USERS.EDIT,
    FEATURE_CAPABILITIES.USERS.INVITE,
    FEATURE_CAPABILITIES.USERS.UPDATE_STATUS,
    FEATURE_CAPABILITIES.USERS.VIEW,
] as const satisfies readonly Capability[];

//      USERS
//   CREATE: 'USER_CREATE',
//   DELETE: 'EDIT',
//   EDIT: 'USER_EDIT',
//   INVITE: 'USER_INVITE',
//   SUSPEND: 'UPDATE_STATUS',
//   VIEW: 'USER_VIEW',