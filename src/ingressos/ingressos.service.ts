import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto, TipoIngresso } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@Injectable()
export class IngressosService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateIngressoDto) {
        const sessao = await this.prisma.sessao.findUnique({
            where: { id: dto.sessaoId },
        });

        if (!sessao) {
            throw new NotFoundException('Sessão não encontrada');
        }

        const valorPago =
            dto.tipo === TipoIngresso.MEIA
                ? sessao.precoInteira / 2
                : sessao.precoInteira;

        return this.prisma.ingresso.create({
            data: {
                ...dto,
                valorPago,
            },
        });
    }

    findAll() {
        return this.prisma.ingresso.findMany({ where: { ativo: true }, include: { sessao: true } });
    }

    findOne(id: number) {
        return this.prisma.ingresso.findUnique({ where: { id }, include: { sessao: true } });
    }

    update(id: number, dto: UpdateIngressoDto) {
        return this.prisma.ingresso.update({ where: { id }, data: dto });
    }

    remove(id: number) {
        return this.prisma.ingresso.update({ where: { id }, data: { ativo: false } });
    }
}
