import z from "zod";

import { emailSchema } from "@/lib/validators/common";

export const forgotPasswordSchema = z
    .object({
        email: emailSchema,
    });

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;