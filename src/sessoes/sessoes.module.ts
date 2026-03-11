import { Module } from '@nestjs/common';
import { SessoesController } from './sessoes.controller';
import { SessoesService } from './sessoes.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [SessoesController],
    providers: [SessoesService],
})
export class SessoesModule { }
