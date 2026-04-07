import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PedidosService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreatePedidoDto, userId?: string) {
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
                ...(userId ? { userId } : {}),
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

    findAll(userId?: string) {
        return this.prisma.pedido.findMany({
            where: userId ? { userId } : undefined,
            include: {
                ingressos: { include: { sessao: { include: { filme: true, sala: true } } } },
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

        let novoTotal = 0;
        let validIngressos: any[] = [];
        let validItens: any[] = [];
        let invalidIngressos: any[] = [];
        let invalidItens: any[] = [];

        pedido.ingressos.forEach(ing => {
            const ingAtivo = ing.ativo !== false;
            const sessaoAtiva = ing.sessao?.ativo !== false;
            const filmeAtivo = ing.sessao?.filme?.ativo !== false;
            if (ingAtivo && sessaoAtiva && filmeAtivo) {
                validIngressos.push(ing);
                novoTotal += ing.valorPago;
            } else {
                invalidIngressos.push(ing);
            }
        });

        pedido.itens.forEach(it => {
            if (it.lanche?.ativo !== false) {
                validItens.push(it);
                novoTotal += it.subtotal;
            } else {
                invalidItens.push(it);
            }
        });

        if (invalidIngressos.length > 0) {
            await this.prisma.ingresso.deleteMany({
                where: { id: { in: invalidIngressos.map(i => i.id) } }
            });
        }
        if (invalidItens.length > 0) {
            await this.prisma.itemPedido.deleteMany({
                where: { id: { in: invalidItens.map(i => i.id) } }
            });
        }

        // 1. Gerar o Comprovante (Recibo HTML simulando PDF)
        const totalFmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(novoTotal);
        const dataFmt = pedido.dataPedido.toLocaleString('pt-BR');

        // Montar linhas do Comprovante
        let linhasHtml = '';
        if (validIngressos.length > 0) {
            linhasHtml += '<h4><i class="bi bi-ticket-perforated"></i> Ingressos</h4><ul>';
            validIngressos.forEach(ing => {
                const filme = ing.sessao?.filme?.titulo || 'Filme Desconhecido';
                const sala = ing.sessao?.sala?.numero || '?';
                linhasHtml += `<li>Ingresso #${ing.id} (${ing.tipo}) - ${filme} (Sala ${sala}) - R$ ${ing.valorPago.toFixed(2)}</li>`;
            });
            linhasHtml += '</ul>';
        }
        if (validItens.length > 0) {
            linhasHtml += '<h4><i class="bi bi-cup-straw"></i> Lanches da Bomboniere</h4><ul>';
            validItens.forEach(it => {
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
                <h2><i class="bi bi-film me-2"></i>CINEMA NESTJS</h2>
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
                valorTotal: novoTotal,
                comprovanteUrl: urlRelativa
            }
        });
    }

    async reembolsar(id: number, tipo: 'TOTAL' | 'PARCIAL') {
        const pedido = await this.findOne(id);
        if (!pedido) throw new NotFoundException('Pedido não encontrado');
        if (pedido.status !== 'PAGO' && pedido.status !== 'REEMBOLSADO_PARCIAL') throw new BadRequestException('Apenas pedidos autorizados podem ser reembolsados.');

        if (tipo === 'TOTAL') {
            const ingressosValidosFiltrados = pedido.ingressos.filter(i => !i.reembolsado);
            if (ingressosValidosFiltrados.length > 0) {
                await this.prisma.ingresso.updateMany({
                    where: { id: { in: ingressosValidosFiltrados.map(i => i.id) } },
                    data: { ativo: false, reembolsado: true }
                });
            }
            const itensParaReembolsar = pedido.itens.filter(i => !i.reembolsado);
            if (itensParaReembolsar.length > 0) {
                await this.prisma.itemPedido.updateMany({
                    where: { id: { in: itensParaReembolsar.map(i => i.id) } },
                    data: { reembolsado: true }
                });
            }
        } else {
            // Parcial: Apenas os recém-inválidos que ainda não foram reembolsados
            let invalidIngressosNovos: any[] = [];
            pedido.ingressos.forEach(ing => {
                if (ing.reembolsado) return;
                const isValido = (ing.ativo !== false) && (ing.sessao?.ativo !== false) && (ing.sessao?.filme?.ativo !== false);
                if (!isValido) invalidIngressosNovos.push(ing);
            });
            if (invalidIngressosNovos.length > 0) {
                await this.prisma.ingresso.updateMany({
                    where: { id: { in: invalidIngressosNovos.map(i => i.id) } },
                    data: { reembolsado: true }
                });
            }

            let invalidItensNovos: any[] = [];
            pedido.itens.forEach(it => {
                if (it.reembolsado) return;
                if (it.lanche?.ativo === false) invalidItensNovos.push(it);
            });
            if (invalidItensNovos.length > 0) {
                await this.prisma.itemPedido.updateMany({
                    where: { id: { in: invalidItensNovos.map(i => i.id) } },
                    data: { reembolsado: true }
                });
            }
        }

        // Buscar novamente para ter a visão final atualizada e gerar o Recibo Cumulativo
        const atualizado = await this.findOne(id)!;
        let valorReembolsadoTotal = 0;
        let linhasHtml = '';

        const refIngressos = atualizado!.ingressos.filter(i => i.reembolsado);
        if (refIngressos.length > 0) {
            linhasHtml += '<h4><i class="bi bi-ticket-perforated"></i> Ingressos Estornados / Cancelados</h4><ul>';
            refIngressos.forEach(ing => {
                linhasHtml += `<li>Ingresso #${ing.id} - R$ ${ing.valorPago.toFixed(2)}</li>`;
                valorReembolsadoTotal += ing.valorPago;
            });
            linhasHtml += '</ul>';
        }

        const refItens = atualizado!.itens.filter(i => i.reembolsado);
        if (refItens.length > 0) {
            linhasHtml += '<h4><i class="bi bi-cup-straw"></i> Lanches Estornados / Indisponíveis</h4><ul>';
            refItens.forEach(it => {
                linhasHtml += `<li>${it.quantidade}x ${it.lanche?.nome || 'Lanche'} - R$ ${it.subtotal.toFixed(2)}</li>`;
                valorReembolsadoTotal += it.subtotal;
            });
            linhasHtml += '</ul>';
        }

        const totalReembolsadosCount = refIngressos.length + refItens.length;
        const totalItemsCount = atualizado!.ingressos.length + atualizado!.itens.length;
        const novoStatus = totalReembolsadosCount === totalItemsCount ? 'REEMBOLSADO' : 'REEMBOLSADO_PARCIAL';

        const totalFmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReembolsadoTotal);
        const dataFmt = new Date().toLocaleString('pt-BR');

        const htmlCupom = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Comprovante de Reembolso #${atualizado!.id}</title>
            <style>
                body { font-family: 'Courier New', Courier, monospace; background: #eee; text-align: center; padding: 20px; }
                .cupom { background: #fff; max-width: 400px; margin: 0 auto; padding: 20px; text-align: left; border: 1px dashed #ccc; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
                h2 { text-align: center; margin-bottom: 5px; color: #c0392b; }
                .traco { border-top: 1px dashed #aaa; margin: 15px 0; }
                .total { font-size: 1.5rem; font-weight: bold; text-align: right; color: #c0392b; }
                .footer { text-align: center; font-size: 0.8rem; color: #777; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="cupom">
                <h2><i class="bi bi-cash-stack me-2"></i>RECIBO CUMULATIVO DE REEMBOLSO</h2>
                <div style="text-align: center">Status do Pedido: ${novoStatus}</div>
                <div class="traco"></div>
                <p><strong>Pedido Original:</strong> #${atualizado!.id}</p>
                <p><strong>Data Atualizada:</strong> ${dataFmt}</p>
                <div class="traco"></div>
                ${linhasHtml}
                <div class="traco"></div>
                <p class="total">VALOR TOTAL DEVOLVIDO: ${totalFmt}</p>
                <div class="footer">Lamentamos o inconveniente.</div>
            </div>
        </body>
        </html>`;

        const filename = `reembolso-${atualizado!.id}-${Date.now()}.html`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'comprovantes');
        const filePath = path.join(uploadDir, filename);

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        fs.writeFileSync(filePath, htmlCupom, 'utf-8');
        const urlRelativa = `/uploads/comprovantes/${filename}`;

        return this.prisma.pedido.update({
            where: { id },
            data: {
                status: novoStatus,
                comprovanteReembolsoUrl: urlRelativa
            }
        });
    }

    async remove(id: number) {
        const pedido = await this.findOne(id);
        if (pedido && pedido.ingressos.length > 0) {
            const ingressosIds = pedido.ingressos.map(i => i.id);
            await this.prisma.ingresso.deleteMany({
                where: { id: { in: ingressosIds } }
            });
        }
        return this.prisma.pedido.delete({ where: { id } });
    }
}
