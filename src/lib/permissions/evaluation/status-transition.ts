import { USER_STATUS_TRANSITIONS, UserStatus } from "@/types/enums";

export function isValidStatusTransition(
  currentStatus: UserStatus,
  nextStatus: UserStatus,
) {
  // Allow idempotent transitions
  if (currentStatus === nextStatus) return true;

  return (
    USER_STATUS_TRANSITIONS[currentStatus]?.includes(nextStatus) ?? false
  );
}