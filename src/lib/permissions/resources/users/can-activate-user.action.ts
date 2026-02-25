import { createAuthorityAction } from "@/lib/permissions/factories";

export const canActivateUser = createAuthorityAction('USER_CREATE');