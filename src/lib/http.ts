/**
 * response-helpers.ts
 * -------------------------------------------------------
 * Centralized HTTP response helpers for Next.js API routes.
 *
 * Goals:
 * - Standardize API error response shapes
 * - Reduce repeated NextResponse boilerplate
 * - Keep frontend error handling predictable
 * - Support auth cookie cleanup for protected routes
 *
 * Standard error response format:
 *
 * {
 *   message: string;
 * }
 *
 * Example:
 *
 * return unauthorized('Invalid credentials');
 *
 * Response:
 *
 * {
 *   "message": "Invalid credentials"
 * }
 * -------------------------------------------------------
 */

import { NextResponse } from 'next/server';

import { clearAuthCookies } from './auth';

type ErrorResponse = {
  message: string;
};

/**
 * Shared helper used internally by all error responses.
 */
function errorResponse(
  message: string,
  status: number,
) {
  return NextResponse.json<ErrorResponse>(
    { message },
    { status },
  );
}

/**
 * 400 Bad Request
 *
 * Used for:
 * - invalid input
 * - malformed requests
 * - validation failures
 */
export function badRequest(
  message = 'Bad Request',
) {
  return errorResponse(message, 400);
}

/**
 * 401 Unauthorized
 *
 * Used for:
 * - invalid credentials
 * - missing auth
 * - expired sessions
 *
 * Optionally clears auth cookies.
 */
export function unauthorized(
  message = 'Unauthorized',
  clearCookies = true,
) {
  const response = errorResponse(message, 401);

  if (clearCookies) {
    clearAuthCookies(response);
  }

  return response;
}

/**
 * 403 Forbidden
 *
 * Used for:
 * - insufficient permissions
 * - role restrictions
 */
export function forbidden(
  message = 'Forbidden',
) {
  return errorResponse(message, 403);
}

/**
 * 404 Not Found
 *
 * Used for:
 * - missing resources
 * - invalid routes
 */
export function notFound(
  message = 'Not Found',
) {
  return errorResponse(message, 404);
}

/**
 * 409 Conflict
 *
 * Used for:
 * - duplicate resources
 * - conflicting state
 *
 * Example:
 * - email already exists
 * - username already taken
 */
export function conflict(
  message = 'Resource already exists',
) {
  return errorResponse(message, 409);
}

/**
 * 500 Internal Server Error
 *
 * Used for:
 * - unexpected server failures
 * - uncaught exceptions
 */
export function internalServerError(
  message = 'Internal Server Error',
) {
  return errorResponse(message, 500);
}