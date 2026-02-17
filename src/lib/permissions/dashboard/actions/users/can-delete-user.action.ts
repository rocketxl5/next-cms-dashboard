import { createAuthorityAction } from "@/lib/permissions/factories";

export const canDeleteUser = createAuthorityAction('USER_DELETE');