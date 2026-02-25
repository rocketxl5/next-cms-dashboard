import { createAuthorityAction } from "@/lib/permissions/factories";

export const canSuspendUser = createAuthorityAction('USER_SUSPEND');