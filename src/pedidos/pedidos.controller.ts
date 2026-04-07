import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Delete, Headers } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Controller('pedidos')
export class PedidosController {
    constructor(private readonly pedidosService: PedidosService) { }

    private getUserContext(auth: string) {
        if (!auth) return null;
        try {
            const token = auth.split(' ')[1];
            return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        } catch (e) {
            return null;
        }
    }

    @Post()
    create(@Body() createPedidoDto: CreatePedidoDto, @Headers('authorization') auth: string) {
        const user = this.getUserContext(auth);
        return this.pedidosService.create(createPedidoDto, user?.sub || null);
    }

    @Get()
    findAll(@Headers('authorization') auth: string) {
        const user = this.getUserContext(auth);
        const isCustomer = user?.role === 'CUSTOMER';
        return this.pedidosService.findAll(isCustomer ? user.sub : undefined);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pedidosService.findOne(id);
    }

    @Patch(':id/pagar')
    pagar(@Param('id', ParseIntPipe) id: number) {
        return this.pedidosService.pagar(id);
    }

    @Post(':id/reembolso')
    reembolsar(@Param('id', ParseIntPipe) id: number, @Body('tipo') tipo: 'TOTAL' | 'PARCIAL') {
        return this.pedidosService.reembolsar(id, tipo);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.pedidosService.remove(id);
    }
}
