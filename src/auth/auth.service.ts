import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || user.password !== pass) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
