import { Module } from '@nestjs/common';
import { LanchesController } from './lanches.controller';
import { LanchesService } from './lanches.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [LanchesController],
    providers: [LanchesService],
})
export class LanchesModule { }
