const { PrismaClient } = require('./src/generated/prisma');
const prisma = new PrismaClient();

async function test() {
  try {
    console.log('Testing Sala.findMany() with include: { cinema: true }...');
    const salas = await prisma.sala.findMany({ include: { cinema: true } });
    console.log('Salas found:', salas);
  } catch (err) {
    console.error('ERROR DETECTED:', err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
