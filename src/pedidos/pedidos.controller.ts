import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Controller('pedidos')
export class PedidosController {
    constructor(private readonly pedidosService: PedidosService) { }

    @Post()
    create(@Body() createPedidoDto: CreatePedidoDto) {
        return this.pedidosService.create(createPedidoDto);
    }

    @Get()
    findAll() {
        return this.pedidosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pedidosService.findOne(id);
    }

    @Patch(':id/pagar')
    pagar(@Param('id', ParseIntPipe) id: number) {
        return this.pedidosService.pagar(id);
    }
}
