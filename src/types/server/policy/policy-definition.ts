import { Capability } from "@/types/permissions"
import { AuthorityRule } from "./authority-rule";

export type PolicyDefinition = {
    /**
     * RBAC capabilities required to perform the action.
     */
    capabilities?: readonly Capability[];

    /**
     * Optional authority rule that must pass.
     */
    authority?: AuthorityRule;
}