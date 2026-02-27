import { ValueOf } from "@/types/utils/value-of";
import { Capability } from '../feature.capabilities';

export const CONTENT_CAPABILITIES = {
  CREATE: 'CONTENT_CREATE',
  EDIT: 'CONTENT_EDIT',
  PUBLISH: 'CONTENT_PUBLISH',
  SUSPEND: 'CONTENT_SUSPEND',
  DELETE: 'CONTENT_DELETE',
} as const;

export const OPERATIONAL_CONTENT_CAPABALITIES = [
  CONTENT_CAPABILITIES.CREATE,
  CONTENT_CAPABILITIES.EDIT,
  CONTENT_CAPABILITIES.PUBLISH,
  CONTENT_CAPABILITIES.SUSPEND,
] as const satisfies readonly Capability[];

export const ALL_CONTENT_CAPABILITIES = Object.values(
  CONTENT_CAPABILITIES,
) as readonly Capability[];

export type ContentCapability = ValueOf<typeof CONTENT_CAPABILITIES>;
