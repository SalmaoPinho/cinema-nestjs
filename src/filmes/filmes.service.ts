import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateFilmeDto) {
        return this.prisma.filme.create({ data: dto });
    }

    findAll() {
        return this.prisma.filme.findMany({ include: { sessoes: true } });
    }

    findOne(id: number) {
        return this.prisma.filme.findUnique({ where: { id }, include: { sessoes: true } });
    }

    update(id: number, dto: UpdateFilmeDto) {
        return this.prisma.filme.update({ where: { id }, data: dto });
    }

    remove(id: number) {
        return this.prisma.filme.delete({ where: { id } });
    }
}
