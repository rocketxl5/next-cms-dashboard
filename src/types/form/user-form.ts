import z from "zod";
import { createUserFormSchema } from '@/app/(protected)/dashboard/users/form/_domain/user-form.schema';

export type UserFormMode = 'create' | 'edit';

export type UserFormValues = z.infer<ReturnType<typeof createUserFormSchema>>;

export type UserFormProps = {
    mode: UserFormMode;
    defaultValues?: Partial<UserFormValues>;
    onSubmit: (value: UserFormValues) => Promise<void>;
}

export type InputField = {
  name: "name" | "email" | "password";
  label: string;
  type?: string;
  required?: boolean;
};