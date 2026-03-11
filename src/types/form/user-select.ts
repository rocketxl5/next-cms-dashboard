import { AppRole, UserStatus } from "../enums";
import { SelectFieldProps } from "../ui/select";

export type RoleSelectProps = SelectFieldProps<AppRole> & {name?: string};
export type StatusSelectProps = SelectFieldProps<UserStatus> & {name?: string};