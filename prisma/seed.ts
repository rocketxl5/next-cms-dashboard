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

import { PrismaClient, Role } from '@prisma/client';
import type { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('Password123!', 10);

  // ----------------------------
  // 1️⃣ Seed Users
  // ----------------------------
  const users = [
    { name: 'Super Admin', email: 'admin@example.com', role: Role.ADMIN },
    { name: 'Regular User', email: 'user@example.com', role: Role.USER },
  ];

  const createdUsers: Record<string, User> = {};

  for (const u of users) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        name: u.name,
        email: u.email,
        password: hashedPassword,
        role: u.role,
        isVerified: true,
        isSeed: true,
      },
    });
    createdUsers[u.role] = user; 
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
