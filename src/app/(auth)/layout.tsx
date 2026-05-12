import { redirect } from "next/navigation";

import { getSession } from "@/lib/server";
import { getRedirectPathname } from "@/lib/shared";

type AuthLayoutProps = {
    children: React.ReactNode;
}

export default async function AuthLayout({
    children
}: AuthLayoutProps) {
    const session = await getSession();

    if(session) {
        redirect(getRedirectPathname(session.user.role));
    }

    return (
      <main className="min-h-screen flex mt-16 justify-center">
        <div className="min-w-sm p-4">{children}</div>
      </main>
    );
}