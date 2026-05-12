import z from "zod";

/**
 * -------------------------------------------------------
 * Email
 * -------------------------------------------------------
 */

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email({
    message: 'Invalid email address',
  });