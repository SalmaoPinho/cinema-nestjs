import { randomUUID } from 'crypto';
import { PrismaClient } from '../src/generated/prisma';

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

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      id: randomUUID(),
      email: 'admin@email.com',
      password: 'senha123',
      name: 'Administrador',
      profileId: adminProfile.id,
    },
  });

  console.log('Admin user created:', adminUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
