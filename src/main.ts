import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');


  // Garantir que exista um Cinema padrão (evita erro de chave estrangeira nas Salas/Sessões)
  try {
    const prisma = app.get(PrismaService);
    if ((await prisma.cinema.count()) === 0) {
      await prisma.cinema.create({
        data: {
          nome: '123Filmes Central',
          endereco: 'Av. Paulista, 1000 - São Paulo, SP',
        },
      });
      console.log('✅ Cinema padrão (ID: 1) criado no banco de dados!');
    }

    const bcrypt = require('bcrypt');
    if ((await prisma.user.count()) === 0) {
      // Cria profile genérico
      const p = await prisma.profile.create({ data: { name: 'Sistema' } });
      const hashedPassAdmin = await bcrypt.hash('admin123', 10);
      const hashedPassCliente = await bcrypt.hash('cliente123', 10);
      
      await prisma.user.create({ data: { email: 'admin@admin.com', name: 'Administrador', password: hashedPassAdmin, role: 'ADMIN', profileId: p.id } });
      await prisma.user.create({ data: { email: 'cliente@cliente.com', name: 'Cliente Teste', password: hashedPassCliente, role: 'CUSTOMER', profileId: p.id } });
      console.log('✅ Usuários admin e cliente criados no banco!');
    }
  } catch (err) {
    console.warn('⚠️  Banco de dados não disponível no boot (cinema padrão não verificado):', err.message);
  }

  // Ativar validação global dos DTOs (class-validator) e conversão automática de tipos
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true, 
    transform: true, 
    transformOptions: { enableImplicitConversion: true } 
  }));

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Cinema REST API')
    .setDescription('API RESTful para gerenciar Cinema')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  // Servir arquivos estáticos da pasta public (funciona em dev e prod)
  const publicPath = process.env.NODE_ENV === 'production'
    ? join(__dirname, '..', 'public')
    : join(process.cwd(), 'public');

  app.useStaticAssets(publicPath);

  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);
  console.log(` App is running on http://localhost:${PORT}`);
  console.log(` Swagger Docs available at http://localhost:${PORT}/api/docs`);
}
bootstrap();
