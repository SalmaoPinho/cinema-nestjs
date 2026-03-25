import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    return this.prisma.profile.create({ data: createProfileDto as any });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: string) {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { id },
      data: updateProfileDto as any,
    });
  }

  remove(id: string) {
    return this.prisma.profile.delete({ where: { id } });
  }
}
