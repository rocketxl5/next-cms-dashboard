'use client';

import { useRouter, useSearchParams } from "next/navigation";

import { ResetPasswordForm } from "../_components/forms";

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const token = searchParams.get('token');

    const isValidToken = 
        typeof token === 'string' && token.trim().length > 0;

    const handleResetSuccess = () => {
        router.replace('/signin');
    };

    if(!isValidToken) {
        router.replace('/reset');
        return null;
    }

    return (
        <ResetPasswordForm token={token} onSuccess={handleResetSuccess} />
    )
}