import { ValueOf } from "@/types/utils/value-of";

export const CONTENT_CAPABILITIES = {
  CREATE: 'CONTENT_CREATE',
  EDIT: 'CONTENT_EDIT',
  DELETE: 'CONTENT_DELETE',
  PUBLISH: 'CONTENT_PUBLISH',
  SUSPEND: 'CONTENT_SUSPEND',
} as const;

export type ContentCapability = ValueOf<typeof CONTENT_CAPABILITIES>;
