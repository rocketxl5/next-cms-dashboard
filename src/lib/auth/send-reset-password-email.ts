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
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="color-scheme" content="light">
          <meta name="supported-color-schemes" content="light">
        </head>

        <body
          style="
            margin:0;
            padding:0;
            background-color:#ffffff;
          "
        >
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              background-color:#ffffff;
              width:100%;
            "
          >
            <tr>
              <td align="center">
                <table
                  width="600"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    background-color:#ffffff;
                    color:#000000;
                    font-family:Arial,sans-serif;
                    padding:40px 24px;
                  "
                >
                  <tr>
                    <td>
                      <h2
                        style="
                          margin:0 0 16px;
                          color:#000000;
                        "
                      >
                        Reset your password
                      </h2>

                      <p
                        style="
                          margin:0 0 24px;
                          color:#000000;
                          line-height:1.5;
                        "
                      >
                        Click the button below to reset your password:
                      </p>

                      <a
                        href="${resetUrl}"
                        style="
                          display:inline-block;
                          background-color:#2563eb;
                          color:#ffffff;
                          text-decoration:none;
                          padding:12px 20px;
                          border-radius:8px;
                          font-weight:bold;
                        "
                      >
                        Reset Password
                      </a>

                      <p
                        style="
                          margin-top:32px;
                          color:#000000;
                          line-height:1.5;
                        "
                      >
                        If you didn’t request this, you can ignore this email.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `,
  });
}
