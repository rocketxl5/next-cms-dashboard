import z from "zod";

/**
 * -------------------------------------------------------
 * Name
 * -------------------------------------------------------
 */

export const nameSchema = z
  .string()
  .trim()
  .min(1, 'Name is required')
  .min(3, 'Name must be at least 3 characters long')
  .regex(/^[a-zA-Z0-9]+$/, {
    message: 'Name may contain letters and numbers only',
  });