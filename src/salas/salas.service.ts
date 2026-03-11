import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalasService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateSalaDto) {
        // 1. Número Auto-incremental (se não fornecido)
        if (!dto.numero) {
            const ultimaSala = await this.prisma.sala.findFirst({
                where: { cinemaId: dto.cinemaId },
                orderBy: { numero: 'desc' },
            });
            dto.numero = ultimaSala ? ultimaSala.numero + 1 : 1;
        }

        // 2. Verificação de Duplicidade (embora DB barre, retornamos erro amigável)
        const existe = await this.prisma.sala.findFirst({
            where: { cinemaId: dto.cinemaId, numero: dto.numero },
        });
        if (existe) {
            throw new BadRequestException(`A Sala ${dto.numero} já existe neste cinema.`);
        }

        // 3. Validação de Capacidade (Grid vs Capacidade)
        const fileiras = dto.fileiras || 8;
        const colunas = dto.colunas || 10;
        if (dto.capacidade > fileiras * colunas) {
            throw new BadRequestException(
                `A capacidade (${dto.capacidade}) não cabe no grid de ${fileiras}x${colunas} (${fileiras * colunas} assentos).`,
            );
        }

        return this.prisma.sala.create({ 
            data: {
                ...dto,
                numero: dto.numero!
            } 
        });
    }

    findAll() {
        return this.prisma.sala.findMany({ 
            include: { cinema: true },
            orderBy: { numero: 'asc' } 
        });
    }

    findOne(id: number) {
        return this.prisma.sala.findUnique({ where: { id }, include: { cinema: true, sessoes: true } });
    }

    update(id: number, dto: UpdateSalaDto) {
        return this.prisma.sala.update({ where: { id }, data: dto });
    }

    remove(id: number) {
        return this.prisma.sala.delete({ where: { id } });
    }
}
