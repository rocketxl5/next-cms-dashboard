import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendResetPasswordEmailParams = {
  to: string;
  token: string;
};

export async function sendResetPasswordEmail({
  to,
  token,
}: SendResetPasswordEmailParams) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  await resend.emails.send({
    from: 'Zap <onboarding@resend.dev>',
    to,
    subject: 'Reset your password',
    html: `
      <div style="font-family:sans-serif;background-color:#ffffff;color:#111827;padding:24px;">
        <h2 style="margin:0 0 16px;">Reset your password</h2>

        <p style="margin:0 0 20px;">
          Click the button below to reset your password:
        </p>

        <a
          href="${resetUrl}"
          style="
            display:inline-block;
            padding:12px 20px;
            background-color:#2563eb;
            color:#ffffff;
            text-decoration:none;
            border-radius:8px;
            font-weight:600;
            border:1px solid #2563eb;
          "
        >
          Reset Password
        </a>

        <p style="margin-top:24px;">
          If you didn’t request this, you can ignore this email.
        </p>
      </div>
    `,
  });
}