import { createAuthorityAction } from "@/lib/permissions/factories";

export const canViewUsers = createAuthorityAction('USER_VIEW');