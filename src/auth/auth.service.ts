import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  private isBcryptHash(value: string) {
    return /^\$2[aby]?\$\d{2}\$[./A-Za-z0-9]{53}$/.test(value);
  }

  async signIn(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const passwordMatches = this.isBcryptHash(user.password)
      ? await bcrypt.compare(pass, user.password).catch(() => false)
      : user.password === pass;

    if (!passwordMatches) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    if (!this.isBcryptHash(user.password)) {
      const upgradedPassword = await bcrypt.hash(pass, 10);
      await this.prisma.user.update({
        where: { email },
        data: { password: upgradedPassword },
      });
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      }
    };
  }

  async register(email: string, name: string, pass: string) {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new BadRequestException('E-mail já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    // Encontra ou cria um perfil padrão para o usuário
    let profile = await this.prisma.profile.findFirst({ where: { name: 'Sistema' } });
    if (!profile) {
      profile = await this.prisma.profile.create({ data: { name: 'Sistema' } });
    }

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: 'CUSTOMER',
        profileId: profile.id,
      },
    });

    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      }
    };
  }

  async recoverPassword(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }

    const tempPassword = 'recuperada123';
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    await this.prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    return {
      message: 'Senha recuperada com sucesso! Uma nova senha temporária foi gerada.',
      tempPassword: tempPassword,
    };
  }
}

