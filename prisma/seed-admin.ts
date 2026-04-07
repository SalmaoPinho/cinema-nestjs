import { randomUUID } from 'crypto';
import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Find or create ADMIN profile
  let adminProfile = await prisma.profile.findFirst({ where: { name: 'ADMIN' } });
  if (!adminProfile) {
    adminProfile = await prisma.profile.create({
      data: {
        id: randomUUID(),
        name: 'ADMIN',
      },
    });
  }

  // Create admin user with a hashed password
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: { password: hashedPassword },
    create: {
      id: randomUUID(),
      email: 'admin@admin.com',
      password: hashedPassword,
      name: 'Administrador',
      profileId: adminProfile.id,
    },
  });

  console.log('Admin user created:', adminUser.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
