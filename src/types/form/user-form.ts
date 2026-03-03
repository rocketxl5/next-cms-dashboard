import z from "zod";
import { createUserFormSchema, UserFormMode } from "@/app/(protected)/dashboard/users/_client/components/form/user-form.schema";

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