import { AppRole } from "../enums";

/**
 * Represents one or multiple allowed roles for a protected resource.
 */
export type AllowedRoles = AppRole | readonly AppRole[];

/**
 * Options for `requireRole`.
 */
export type RequireRoleOptions = {
  /** Allowed role(s) for this resource */
  roles: AllowedRoles;

  /** Where to redirect if user is not authenticated (optional) */
  unauthenticatedRedirect?: string;

  /** Where to redirect if user is authenticated but forbidden (optional) */
  forbiddenRedirect?: string;
};