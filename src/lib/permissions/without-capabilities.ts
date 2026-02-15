import { AppRole } from "@/types/enums";
import { FEATURE_CAPABILITIES } from "@/types/permissions/feature.capabilities";
import { Capability } from '@/types/permissions';
import { ROLE_CAPABILITY_EXCLUSIONS } from "@/types/permissions/role-exclusion.capabillities";

export function without(
    role: AppRole,
    feature: keyof typeof FEATURE_CAPABILITIES,
): Capability[] {
    const base = Object.values(FEATURE_CAPABILITIES[feature]) as readonly Capability[];

    const excluded =
        ROLE_CAPABILITY_EXCLUSIONS[role]?.[feature] ?? [];

    return base.filter(c => !excluded.includes(c));
}