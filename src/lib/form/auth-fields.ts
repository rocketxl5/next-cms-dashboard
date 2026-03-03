import { InputField, UserFormMode } from "@/types/form";

export const getInputFields = (mode: UserFormMode): InputField[] => [
  {
    name: "name",
    label: "Name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: mode === "create",
  },
];