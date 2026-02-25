import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { Role } from '@prisma/client';
import { UserStatus } from '@/types/enums';
import { withRole } from '@/lib/server/with-role';
import { getUsers } from '@/lib/server/services/admin-users.service';

// --------------------
// Local types for payloads
// --------------------
type UserCreatePayload = {
  name?: string;
  email: string;
  password: string;
  role: Role;
  status: UserStatus;
};

type UserUpdatePayload = {
  name?: string;
  role?: Role;
  status?: UserStatus;
};

// --------------------
// GET — List all users
// --------------------
export const GET = withRole(['ADMIN', 'SUPER_ADMIN'], async () => {
  try {
    const users = await getUsers();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 },
    );
  }
});

// --------------------
// POST — Create a new user
// --------------------
export const POST = withRole(['ADMIN', 'SUPER_ADMIN'], async (req, user) => {
  const data: UserCreatePayload = await req.json();

  if (!data.email || !data.password || !data.role) {
    return NextResponse.json(
      { error: 'Email, password, and role are required' },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        // status: data.status,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        // status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('❌ Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 },
    );
  }
});

// --------------------
// PUT — Update existing user
// --------------------
export const PUT = withRole(['ADMIN', 'SUPER_ADMIN'], async (req, user) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  if (!id)
    return NextResponse.json({ error: 'User ID required' }, { status: 400 });

  const data: UserUpdatePayload = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        role: data.role,
        // status: data.status,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        // status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('❌ Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 },
    );
  }
});

// --------------------
// DELETE — Remove user
// --------------------
export const DELETE = withRole(['ADMIN', 'SUPER_ADMIN'], async (req, user) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  if (!id)
    return NextResponse.json({ error: 'User ID required' }, { status: 400 });

  try {
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 },
    );
  }
});
