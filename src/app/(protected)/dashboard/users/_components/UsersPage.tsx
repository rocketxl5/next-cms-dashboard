import { UsersTable } from "./UsersTable";
import { getUsers } from "@/lib/server";
import { prismaToDashboardUser } from "../_map/user-row-map";
import { DashboardUserRow } from "../_domain";

export default async function UsersPage() {
    const users = await getUsers();
    const rows: DashboardUserRow[] = users
    .map(prismaToDashboardUser)
    .filter((u): u is DashboardUserRow => u !== null)
    return <UsersTable users={rows} />
}