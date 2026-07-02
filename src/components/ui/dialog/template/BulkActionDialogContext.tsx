import { DialogContextField } from "../field/DialogContextField";
import { DialogContextTemplate } from "./DialogContextTemplate";

// import { UserRow } from "@/app/(protected)/dashboard/users/_domain";

// type UserDialogContextProps = {
//     user: UserRow;
// }

export function BulkActionDialogContext() {
      return (
    <DialogContextTemplate>
      <DialogContextField label="Name">
        {/* {user.name} */}
        {'label'}
      </DialogContextField>

      <DialogContextField label="Email">
        {/* {user.email} */}
             {'field'}
      </DialogContextField>

      <DialogContextField label="Role">
        {/* {user.role} */}
             {'context'}
      </DialogContextField>
    </DialogContextTemplate>
  );
}