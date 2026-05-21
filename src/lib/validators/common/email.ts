import z from "zod";

/**
 * -------------------------------------------------------
 * Email
 * -------------------------------------------------------
 */

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .trim()
  .toLowerCase()
  .email({
    message: 'Invalid email address',
  });