'use server';

import prisma from "@/lib/prisma";
import { createUserSchema } from "../_domain/user-form.schema";
import { hash } from "bcryptjs";
import { mapCssThemeToDatabase } from "@/lib/theme";

export async function createUserAction(data: unknown) {
    const parsed = createUserSchema.parse(data);

    const password = await hash(parsed.password, 10);
    
   await prisma.user.create({
    data: {
      ...parsed,
      password,
      theme: mapCssThemeToDatabase(parsed.theme),
    },
  });
}