import { AppRole } from "../enums";

export type PublicUser = {
    id: string;
    email: string;
    role: AppRole;
}