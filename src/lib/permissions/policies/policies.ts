import { CONTENT_POLICIES, USER_POLICIES } from "./domains";
import { Capability } from "@/lib/permissions/model/capabilities";
import { PolicyDefinition } from "@/types/permissions";

export const POLICIES: Record<Capability, PolicyDefinition> = {
    ...USER_POLICIES,
    ...CONTENT_POLICIES
}