import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';

@Injectable()
export class LanchesService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateLancheDto) {
        return this.prisma.lanche.create({ data: dto });
    }

    findAll() {
        return this.prisma.lanche.findMany({ where: { ativo: true } });
    }

    findOne(id: number) {
        return this.prisma.lanche.findUnique({ where: { id } });
    }

    update(id: number, dto: UpdateLancheDto) {
        return this.prisma.lanche.update({ where: { id }, data: dto });
    }

    remove(id: number) {
        return this.prisma.lanche.update({ where: { id }, data: { ativo: false } });
    }
}
