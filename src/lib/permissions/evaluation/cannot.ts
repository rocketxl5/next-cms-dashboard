import { AppRole } from "@/types/enums";
import { FEATURE_CAPABILITIES } from "@/lib/permissions/model/capabilities/feature.capabilities";
import { Capability } from '@/lib/permissions/model/capabilities';
import { ROLE_CAPABILITY_EXCLUSIONS } from "@/lib/permissions/model/capabilities/role-exclusion.capabillities";

export function cannot(
    role: AppRole,
    feature: keyof typeof FEATURE_CAPABILITIES,
): Capability[] {
    const base = Object.values(FEATURE_CAPABILITIES[feature]) as readonly Capability[];

    const excluded =
        ROLE_CAPABILITY_EXCLUSIONS[role]?.[feature] ?? [];

    return base.filter(c => !excluded.includes(c));
}