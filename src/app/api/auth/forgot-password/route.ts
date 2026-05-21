import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { forgotPasswordSchema } from '@/app/(auth)/_schema';

// import { sendResetPasswordEmail } from '@/lib/mail';
// import { generateResetToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = forgotPasswordSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: 'Invalid request data',
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    /**
     * Always return success even if the email does not exist.
     * Prevents email enumeration attacks.
     */
    if (!user) {
      return NextResponse.json(
        {
          message:
            'If an account exists for this email, a reset link has been sent.',
        },
        { status: 200 }
      );
    }

    /**
     * Generate token + expiration
     */
    // const token = generateResetToken();

    // const expires = new Date(Date.now() + 1000 * 60 * 15);

    /**
     * Save token to database
     */
    // await prisma.passwordResetToken.create({
    //   data: {
    //     userId: user.id,
    //     token,
    //     expires,
    //   },
    // });

    /**
     * Send email
     */
    // await sendResetPasswordEmail({
    //   to: user.email,
    //   token,
    // });

    return NextResponse.json(
      {
        message:
          'If an account exists for this email, a reset link has been sent.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Forgot password error:', error);

    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}