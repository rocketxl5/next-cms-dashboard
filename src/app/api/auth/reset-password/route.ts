import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';

import { prisma } from '@/lib/prisma';
import {
  resetPasswordSchema,
  type ResetPasswordData,
} from '@/app/(auth)/_schema';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ResetPasswordData & {
      token: string;
    };

    const parsed = resetPasswordSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: 'Invalid request data',
        },
        { status: 400 },
      );
    }

    const { password, token } = body;

    if (!token || typeof token !== 'string') {
      return NextResponse.json(
        {
          message: 'Invalid or missing token',
        },
        { status: 400 },
      );
    }

    /**
     * Find reset token
     */
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: {
        token,
      },
    });

    if (!resetToken) {
      return NextResponse.json(
        {
          message: 'Invalid reset token',
        },
        { status: 400 },
      );
    }

    /**
     * Check token expiration
     */
    const isExpired = resetToken.expires < new Date();

    if (isExpired) {
      return NextResponse.json(
        {
          message: 'Reset token has expired',
        },
        { status: 400 },
      );
    }

    /**
     * Hash new password
     */
    const hashedPassword = await hash(password, 12);

    /**
     * Update user password
     */
    await prisma.user.update({
      where: {
        id: resetToken.userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    /**
     * Delete used token
     */
    await prisma.passwordResetToken.delete({
      where: {
        id: resetToken.id,
      },
    });

    return NextResponse.json(
      {
        message: 'Password reset successfully',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Reset password error:', error);

    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      { status: 500 },
    );
  }
}
