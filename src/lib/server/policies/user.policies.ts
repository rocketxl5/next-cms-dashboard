import { USER_CAPABILITIES, UserCapability } from "@/types/permissions";
import { PolicyDefinition } from "@/types/server/policy/policy-definition";

export const USER_POLICIES: Record<UserCapability, PolicyDefinition> = {
  [USER_CAPABILITIES.CREATE]: { capabilities: [USER_CAPABILITIES.CREATE] },
  [USER_CAPABILITIES.DELETE]: { capabilities: [USER_CAPABILITIES.DELETE] },
  [USER_CAPABILITIES.EDIT]: { capabilities: [USER_CAPABILITIES.EDIT] },
  [USER_CAPABILITIES.EDIT_ROLE]: {
    capabilities: [USER_CAPABILITIES.EDIT_ROLE],
    authority: 'ACT_ON_USER',
  },
  [USER_CAPABILITIES.INVITE]: { capabilities: [USER_CAPABILITIES.INVITE] },
  [USER_CAPABILITIES.SUSPEND]: { capabilities: [USER_CAPABILITIES.SUSPEND] },
  [USER_CAPABILITIES.VIEW]: { capabilities: [USER_CAPABILITIES.VIEW] },
};