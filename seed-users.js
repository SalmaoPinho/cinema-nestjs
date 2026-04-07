// Temporary seed script - run with: node seed-users.js
require('dotenv/config');
const { PrismaClient } = require('./src/generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const SALT = 10;

  // Ensure a shared profile exists
  let profile = await prisma.profile.findFirst({ where: { name: 'Sistema' } });
  if (!profile) {
    profile = await prisma.profile.create({ data: { name: 'Sistema' } });
    console.log('✅ Profile "Sistema" created');
  }

  const users = [
    { email: 'admin@admin.com', name: 'Administrador', password: 'admin123', role: 'ADMIN' },
    { email: 'cliente@cliente.com', name: 'Cliente Teste', password: 'cliente123', role: 'CUSTOMER' },
  ];

  for (const u of users) {
    const existing = await prisma.user.findUnique({ where: { email: u.email } });
    const hashed = await bcrypt.hash(u.password, SALT);

    if (existing) {
      await prisma.user.update({
        where: { email: u.email },
        data: { password: hashed, role: u.role, deletedAt: null },
      });
      console.log(`✅ Updated user: ${u.email} (role: ${u.role})`);
    } else {
      await prisma.user.create({
        data: { email: u.email, name: u.name, password: hashed, role: u.role, profileId: profile.id },
      });
      console.log(`✅ Created user: ${u.email} (role: ${u.role})`);
    }
  }
}

main()
  .catch(e => { console.error('❌ Error:', e.message); process.exit(1); })
  .finally(() => prisma.$disconnect());
