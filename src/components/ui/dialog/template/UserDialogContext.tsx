import { DialogContextField } from "../field/DialogContextField";
import { DialogContextTemplate } from "./DialogContextTemplate";

import { UserRow } from '@/app/(protected)/dashboard/users/_domain';

type UserDialogContextProps = {
    user: UserRow;
}

export function UserDialogContext({
    user
}: UserDialogContextProps) {
      return (
    <DialogContextTemplate>
      <DialogContextField label="Name">
        {user.name}
      </DialogContextField>

      <DialogContextField label="Email">
        {user.email}
      </DialogContextField>

      <DialogContextField label="Role">
        {user.role}
      </DialogContextField>
    </DialogContextTemplate>
  );
}