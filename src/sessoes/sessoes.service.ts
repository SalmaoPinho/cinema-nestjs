import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessoesService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateSessaoDto) {
        return this.prisma.sessao.create({ data: dto });
    }

    findAll() {
        return this.prisma.sessao.findMany({ include: { filme: true, sala: true } });
    }

    findOne(id: number) {
        return this.prisma.sessao.findUnique({
            where: { id },
            include: { filme: true, sala: true, ingressos: true },
        });
    }

    update(id: number, dto: UpdateSessaoDto) {
        return this.prisma.sessao.update({ where: { id }, data: dto });
    }

    remove(id: number) {
        return this.prisma.sessao.delete({ where: { id } });
    }
}
