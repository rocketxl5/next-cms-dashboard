import z from 'zod';

export function requireAtLeastOneField<
  T extends z.ZodRawShape
>(
  schema: z.ZodObject<T>,
  excludedKeys: (keyof z.infer<typeof schema>)[] = []
) {
  return schema.refine(
    (data) =>
      Object.entries(data).some(
        ([key, value]) =>
          !excludedKeys.includes(key as keyof typeof data) &&
          value !== undefined
      ),
    {
      message: 'At least one field must be provided',
    }
  );
}