import { createAuthorityAction } from "@/lib/permissions/factories";

export const canUpdateUserRole = createAuthorityAction('USER_EDIT_ROLE');