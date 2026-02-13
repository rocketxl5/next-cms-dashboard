import { CONTENT_CAPABILITIES } from "./capabilities/content.capabilities";
import { USER_CAPABILITIES } from "./capabilities/users.capabilities";

export const ROLE_CAPABILITY_EXCLUSIONS  = {
    ADMIN: {
        USERS: [USER_CAPABILITIES.DELETE],
    },

    EDITOR: {
        CONTENT: [CONTENT_CAPABILITIES.DELETE]
    }
} as const;