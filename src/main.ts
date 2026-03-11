import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Garantir que exista um Cinema padrão (evita erro de chave estrangeira nas Salas/Sessões)
  const prisma = app.get(PrismaService);
  if ((await prisma.cinema.count()) === 0) {
    await prisma.cinema.create({
      data: {
        nome: 'CineManager Principal',
        endereco: 'Av. Paulista, 1000 - São Paulo, SP',
      },
    });
    console.log(' Cinema padrão (ID: 1) criado no banco de dados!');
  }

  // Ativar validação global dos DTOs (class-validator)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Servir arquivos estáticos da pasta public (funciona em dev e prod)
  const publicPath = process.env.NODE_ENV === 'production'
    ? join(__dirname, '..', 'public')
    : join(process.cwd(), 'public');

  app.useStaticAssets(publicPath);

  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);
  console.log(` App is running on http://localhost:${PORT}`);
}
bootstrap();

 
