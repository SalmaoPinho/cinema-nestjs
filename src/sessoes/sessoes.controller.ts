import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SessoesService } from './sessoes.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Controller('sessoes')
export class SessoesController {
    constructor(private readonly sessoesService: SessoesService) { }

    @Post()
    create(@Body() dto: CreateSessaoDto) {
        return this.sessoesService.create(dto);
    }

    @Get()
    findAll() {
        return this.sessoesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.sessoesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSessaoDto) {
        return this.sessoesService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.sessoesService.remove(id);
    }
}
