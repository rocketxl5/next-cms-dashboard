import { DialogContextField } from "./field/DialogContextField";
import { DialogContextTemplate } from "./template/DialogContextTemplate";

// import { UserRow } from "@/app/(protected)/dashboard/users/list/_domain";

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