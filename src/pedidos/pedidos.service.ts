import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Injectable()
export class PedidosService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreatePedidoDto) {
        const { ingressoIds = [], lanches = [] } = dto;

        if (ingressoIds.length === 0 && lanches.length === 0) {
            throw new BadRequestException('O pedido precisa ter pelo menos 1 ingresso ou 1 lanche.');
        }

        // Calcula total
        let valorTotal = 0;

        // 1. Validar e somar Ingressos
        const ingressosDB = await this.prisma.ingresso.findMany({
            where: { id: { in: ingressoIds } },
        });
        if (ingressosDB.length !== ingressoIds.length) {
            throw new BadRequestException('Alguns ingressos fornecidos não foram encontrados.');
        }
        const totalIngressos = ingressosDB.reduce((sum, item) => sum + item.valorTotal, 0);
        valorTotal += totalIngressos;

        // 2. Validar e somar Lanches
        const itensParaSalvar: any[] = [];
        if (lanches.length > 0) {
            const lancheIds = lanches.map((l) => l.lancheId);
            const lanchesDB = await this.prisma.lanche.findMany({
                where: { id: { in: lancheIds } },
            });

            for (const lancheReq of lanches) {
                const lancheBase = lanchesDB.find((l) => l.id === lancheReq.lancheId);
                if (!lancheBase) {
                    throw new BadRequestException(`Lanche de ID ${lancheReq.lancheId} não encontrado.`);
                }
                const subtotal = lancheBase.preco * lancheReq.quantidade;
                valorTotal += subtotal;

                itensParaSalvar.push({
                    lancheId: lancheReq.lancheId,
                    quantidade: lancheReq.quantidade,
                    subtotal: subtotal,
                });
            }
        }

        // Cria o Pedido (transação atrelada no Prisma)
        return this.prisma.pedido.create({
            data: {
                valorTotal,
                ingressos: {
                    connect: ingressoIds.map((id) => ({ id })),
                },
                itens: {
                    create: itensParaSalvar,
                },
            },
            include: {
                ingressos: true,
                itens: { include: { lanche: true } },
            },
        });
    }

    findAll() {
        return this.prisma.pedido.findMany({
            include: {
                ingressos: true,
                itens: { include: { lanche: true } },
            },
            orderBy: { dataPedido: 'desc' }
        });
    }

    findOne(id: number) {
        return this.prisma.pedido.findUnique({
            where: { id },
            include: {
                ingressos: true,
                itens: { include: { lanche: true } },
            },
        });
    }
}
