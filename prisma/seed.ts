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
    ...Array.from({ length: 100 }, (_, i) => ({
      name: `User ${i + 1}`,
      email: `user${i + 1}@next.com`,
      role: i % 20 === 0 ? Role.ADMIN : i % 10 === 0 ? Role.EDITOR : Role.USER,
    })),
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
