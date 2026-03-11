import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@Injectable()
export class IngressosService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateIngressoDto) {
        return this.prisma.ingresso.create({ data: dto });
    }

    findAll() {
        return this.prisma.ingresso.findMany({ include: { sessao: true } });
    }

    findOne(id: number) {
        return this.prisma.ingresso.findUnique({ where: { id }, include: { sessao: true } });
    }

    update(id: number, dto: UpdateIngressoDto) {
        return this.prisma.ingresso.update({ where: { id }, data: dto });
    }

    remove(id: number) {
        return this.prisma.ingresso.delete({ where: { id } });
    }
}
