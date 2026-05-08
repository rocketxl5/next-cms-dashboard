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
        <main className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                {children}
            </div>
        </main>
    )
}