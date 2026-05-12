import z from "zod";

/**
 * -------------------------------------------------------
 * Name
 * -------------------------------------------------------
 */

export const nameSchema = z
  .string()
  .trim()
  .min(3, {
    message: 'Name must be at least 3 characters long',
  })
  .regex(/^[a-zA-Z0-9]+$/, {
    message: 'Name can only contain letters and numbers',
  });