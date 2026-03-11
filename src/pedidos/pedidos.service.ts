import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import * as fs from 'fs';
import * as path from 'path';

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
        const totalIngressos = ingressosDB.reduce((sum, item) => sum + item.valorPago, 0);
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
                ingressos: { include: { sessao: { include: { filme: true, sala: true } } } },
                itens: { include: { lanche: true } },
            },
        });
    }

    async pagar(id: number) {
        const pedido = await this.findOne(id);
        if (!pedido) throw new NotFoundException('Pedido não encontrado');
        if (pedido.status === 'PAGO') throw new BadRequestException('Pedido já está pago.');

        // 1. Gerar o Comprovante (Recibo HTML simulando PDF)
        const totalFmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.valorTotal);
        const dataFmt = pedido.dataPedido.toLocaleString('pt-BR');

        // Montar linhas do Comprovante
        let linhasHtml = '';
        if (pedido.ingressos.length > 0) {
            linhasHtml += '<h4>🎟️ Ingressos</h4><ul>';
            pedido.ingressos.forEach(ing => {
                const filme = ing.sessao?.filme?.titulo || 'Filme Desconhecido';
                const sala = ing.sessao?.sala?.numero || '?';
                linhasHtml += `<li>Ingresso #${ing.id} (${ing.tipo}) - ${filme} (Sala ${sala}) - R$ ${ing.valorPago.toFixed(2)}</li>`;
            });
            linhasHtml += '</ul>';
        }
        if (pedido.itens.length > 0) {
            linhasHtml += '<h4>🍿 Lanches da Bomboniere</h4><ul>';
            pedido.itens.forEach(it => {
                linhasHtml += `<li>${it.quantidade}x ${it.lanche?.nome} - R$ ${it.subtotal.toFixed(2)}</li>`;
            });
            linhasHtml += '</ul>';
        }

        const htmlCupom = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Comprovante #${pedido.id}</title>
            <style>
                body { font-family: 'Courier New', Courier, monospace; background: #eee; text-align: center; padding: 20px; }
                .cupom { background: #fff; max-width: 400px; margin: 0 auto; padding: 20px; text-align: left; border: 1px dashed #ccc; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
                h2 { text-align: center; margin-bottom: 5px; }
                .traco { border-top: 1px dashed #aaa; margin: 15px 0; }
                .total { font-size: 1.5rem; font-weight: bold; text-align: right; color: #27ae60; }
                .footer { text-align: center; font-size: 0.8rem; color: #777; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="cupom">
                <h2>🎬 CINEMA NESTJS 🎬</h2>
                <div style="text-align: center">Comprovante de Pagamento</div>
                <div class="traco"></div>
                <p><strong>Pedido:</strong> #${pedido.id}</p>
                <p><strong>Data:</strong> ${dataFmt}</p>
                <p><strong>Status:</strong> APROVADO ✅</p>
                <div class="traco"></div>
                ${linhasHtml}
                <div class="traco"></div>
                <p class="total">TOTAL: ${totalFmt}</p>
                <div class="footer">Obrigado pela preferência e bom filme!</div>
            </div>
        </body>
        </html>`;

        // Salvar fisicamente no disco na subpasta de comprovantes
        const filename = `comprovante-${pedido.id}-${Date.now()}.html`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'comprovantes');
        const filePath = path.join(uploadDir, filename);

        // Garante que o dir existe 
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        fs.writeFileSync(filePath, htmlCupom, 'utf-8');
        const urlRelativa = `/uploads/comprovantes/${filename}`;

        // 2. Atualizar o banco de dados e Mudar para "PAGO"
        return this.prisma.pedido.update({
            where: { id },
            data: {
                status: 'PAGO',
                comprovanteUrl: urlRelativa
            }
        });
    }
}
