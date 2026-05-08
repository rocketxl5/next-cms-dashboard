'use client';

import { Link } from "../../Link";
import { PowerOff } from "lucide-react";

export function SignInBtn() {
    return (
        <Link href='/auth/signin' variant='foreground'>{<PowerOff size={22} />}</Link>
    )
}