import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalasService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateSalaDto) {
        return this.prisma.sala.create({ data: dto });
    }

    findAll() {
        return this.prisma.sala.findMany({ include: { cinema: true } });
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
