import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({ data: createAddressDto as any });
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: string) {
    return this.prisma.address.findUnique({ where: { id } });
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: { id },
      data: updateAddressDto as any,
    });
  }

  remove(id: string) {
    return this.prisma.address.delete({ where: { id } });
  }
}
