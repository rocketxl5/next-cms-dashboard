import { Theme } from "../enums";

export type UserAccountUpdate = {
    name?: string | null;
    theme?: Theme;
    avatarUrl: string | null;
}