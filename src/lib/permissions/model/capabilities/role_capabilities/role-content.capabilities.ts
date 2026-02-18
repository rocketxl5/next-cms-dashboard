import { FEATURE_CAPABILITIES, Capability } from "../feature.capabilities";
import { valuesOf } from "@/lib/utils";

// SUPER_ADMIN & ADMIN CONTENT capabilities (all)
export const CONTENT_ALL_CAPABILITIES = [
    ...valuesOf(FEATURE_CAPABILITIES.CONTENT)
] as const satisfies readonly Capability[];

// EDITOR CONTENT capabilities (all - 1)
export const CONTENT_EDITOR_CAPABILITIES = [
    FEATURE_CAPABILITIES.CONTENT.CREATE,
    FEATURE_CAPABILITIES.CONTENT.EDIT,
    FEATURE_CAPABILITIES.CONTENT.PUBLISH,
    FEATURE_CAPABILITIES.CONTENT.SUSPEND,
] as const satisfies readonly Capability[];

//      CONTENT
//   CREATE: 'CONTENT_CREATE',
//   EDIT: 'CONTENT_EDIT',
//   DELETE: 'CONTENT_DELETE',
//   PUBLISH: 'CONTENT_PUBLISH',
//   SUSPEND: 'CONTENT_SUSPEND',