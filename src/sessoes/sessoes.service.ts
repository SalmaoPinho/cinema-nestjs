import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessoesService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateSessaoDto) {
        const filmeNovo = await this.prisma.filme.findUnique({ where: { id: dto.filmeId } });
        if (!filmeNovo) throw new BadRequestException('Filme não encontrado.');

        const horarioNovoInicio = new Date(dto.horarioExibicao);
        const horarioNovoFim = new Date(horarioNovoInicio.getTime() + filmeNovo.duracao * 60000);

        const sessoesExistentes = await this.prisma.sessao.findMany({
            where: { salaId: dto.salaId, ativo: true },
            include: { filme: true }
        });

        for (const sessao of sessoesExistentes) {
            const inicioExistente = new Date(sessao.horarioExibicao);
            const fimExistente = new Date(inicioExistente.getTime() + sessao.filme.duracao * 60000);

            // if (StartA < EndB) and (EndA > StartB) -> Overlap
            if (horarioNovoInicio < fimExistente && horarioNovoFim > inicioExistente) {
                const initStr = inicioExistente.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                const endStr = fimExistente.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                throw new BadRequestException(`Conflito! A sala já possui a sessão '${sessao.filme.titulo}' das ${initStr} às ${endStr}.`);
            }
        }

        return this.prisma.sessao.create({ data: dto });
    }

    findAll() {
        return this.prisma.sessao.findMany({ where: { ativo: true }, include: { filme: true, sala: true } });
    }

    findOne(id: number) {
        return this.prisma.sessao.findUnique({
            where: { id },
            include: { filme: true, sala: true, ingressos: { where: { ativo: true } } },
        });
    }

    update(id: number, dto: UpdateSessaoDto) {
        return this.prisma.sessao.update({ where: { id }, data: dto });
    }

    remove(id: number) {
        return this.prisma.sessao.update({ where: { id }, data: { ativo: false } });
    }
}
