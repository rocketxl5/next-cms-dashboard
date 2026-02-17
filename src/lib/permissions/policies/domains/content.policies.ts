import { CONTENT_CAPABILITIES, ContentCapability } from "@/lib/permissions/model/capabilities/domains";
import { PolicyDefinition } from "@/types/permissions";

export const CONTENT_POLICIES: Record<ContentCapability, PolicyDefinition> = {
    [CONTENT_CAPABILITIES.CREATE]: { capabilities: [CONTENT_CAPABILITIES.CREATE] },
    [CONTENT_CAPABILITIES.DELETE]: { capabilities: [CONTENT_CAPABILITIES.DELETE] },
    [CONTENT_CAPABILITIES.EDIT]: { capabilities: [CONTENT_CAPABILITIES.EDIT] },
    [CONTENT_CAPABILITIES.PUBLISH]: { capabilities: [CONTENT_CAPABILITIES.PUBLISH] },
    [CONTENT_CAPABILITIES.SUSPEND]: { capabilities: [CONTENT_CAPABILITIES.SUSPEND] },
}