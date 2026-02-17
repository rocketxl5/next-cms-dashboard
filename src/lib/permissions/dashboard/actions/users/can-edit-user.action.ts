import { createAuthorityAction } from "@/lib/permissions/factories";

export const canEditUser = createAuthorityAction('USER_EDIT');