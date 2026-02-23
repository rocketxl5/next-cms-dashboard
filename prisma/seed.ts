/**
 * SEED SCRIPT
 * -------------------------------------------------------
 * Warning:
 *   - This seed script is meant for template/demo purposes.
 *   - Running in a live production database may overwrite or create demo data.
 * 
 * Purpose:
 *   - Create super admin, user
 *   - Mark seed records with isSeed
 *
 * Run:
 *   npx prisma db seed
 */

import { PrismaClient, Role, Status } from '@prisma/client';
import type { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('r0cK3t68', 10);

  // ----------------------------
  // 1️⃣ Seed Users
  // ----------------------------
  const users = [
    {
      name: 'Super Admin',
      email: 'superadmin@next.com',
      role: Role.SUPER_ADMIN,
    },
    { name: 'Admin_1', email: 'admin1@next.com', role: Role.ADMIN },
    { name: 'Admin_2', email: 'admin2@next.com', role: Role.ADMIN },
    { name: 'Max', email: 'max@next.com', role: Role.USER },
    { name: 'Frank', email: 'frank@next.com', role: Role.USER },
    { name: 'Martin', email: 'martin@next.com', role: Role.USER },
    { name: 'Gilles', email: 'gilles@next.com', role: Role.USER },
    { name: 'Seb', email: 'seb@next.com', role: Role.USER },
    { name: 'Maxime', email: 'maxime@next.com', role: Role.EDITOR },
    { name: 'Bea', email: 'bea@next.com', role: Role.EDITOR },
    { name: 'juliette', email: 'juliette@next.com', role: Role.EDITOR },
  ];

const createdUsers: Record<Role, User[]> = {
  USER: [],
  EDITOR: [],
  ADMIN: [],
  SUPER_ADMIN: [],
};

for (const u of users) {
  const user = await prisma.user.upsert({
    where: { email: u.email },
    update: {},
    create: {
      name: u.name,
      email: u.email,
      password: hashedPassword,
      role: u.role,
      status: Status.ACTIVE,
      isSeed: true,
    },
  });

  createdUsers[u.role].push(user);
}

  // ----------------------------
  // 3️⃣ Seed Global Settings
  // ----------------------------
  await prisma.settings.upsert({
    where: { id: 'global' },
    update: {},
    create: {
      id: 'global',
      siteName: 'CMS Template',
      contactEmail: 'admin@example.com',
      theme: 'light',
    },
  });

  console.log('✅ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
