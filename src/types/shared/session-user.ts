/**
 * TRUST ZONE: Shared / Auth Contract
 * 
 * Minimal user information strored in session 
 * and exposed to the client.
 */

import { AppRole } from "../enums/roles";

export type SessionUser = {
    id: string;
    email: string;
    role: AppRole;
}