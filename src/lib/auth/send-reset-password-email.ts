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
      <div style="font-family: sans-serif;">
        <h2>Reset your password</h2>

        <p>Click the button below to reset your password:</p>

        <a href="${resetUrl}" 
           style="display:inline-block;padding:10px 16px;background:#000;color:#fff;text-decoration:none;border-radius:6px;">
          Reset Password
        </a>

        <p>If you didn’t request this, you can ignore this email.</p>
      </div>
    `,
  });
}