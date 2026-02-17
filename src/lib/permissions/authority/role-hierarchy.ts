import { ROLE_RANK } from "../model/roles/role-hierarchy.model";
import { AppRole } from "@/types/enums";

export function isHigherRole(a: AppRole, b: AppRole) {
  return ROLE_RANK[a] > ROLE_RANK[b];
}

export function isSameOrHigherRole(a: AppRole, b: AppRole) {
  return ROLE_RANK[a] >= ROLE_RANK[b];
}

export function isLowerRole(a: AppRole, b: AppRole) {
  return ROLE_RANK[a] < ROLE_RANK[b];
}