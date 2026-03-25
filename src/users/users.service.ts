import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({ data: createUserDto });
    }

    findAll() {
        return this.prisma.user.findMany({ where: { deletedAt: null } });
    }

    async findOne(id: string) {
        const user = await this.prisma.user.findFirst({ where: { id, deletedAt: null } });
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.prisma.user.findFirst({ where: { id, deletedAt: null } });
        if (!user) throw new NotFoundException('User not found');
        
        return this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
    }

    async remove(id: string) {
        const user = await this.prisma.user.findFirst({ where: { id, deletedAt: null } });
        if (!user) throw new NotFoundException('User not found');

        return this.prisma.user.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
}
