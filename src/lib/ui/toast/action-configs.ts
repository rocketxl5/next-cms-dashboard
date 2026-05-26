import { AddToastInput } from "@/types/ui/toast";

  export type ActionConfig = {
  label: string;

  successToast: AddToastInput;

  errorToast: AddToastInput;
};