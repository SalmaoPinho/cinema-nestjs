import { IsArray, IsInt, IsOptional, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PedidoLancheItemDto {
    @IsInt()
    lancheId: number;

    @IsInt()
    @Min(1)
    quantidade: number;
}

export class CreatePedidoDto {
    @IsOptional()
    @IsArray()
    @IsInt({ each: true })
    ingressoIds?: number[];

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PedidoLancheItemDto)
    lanches?: PedidoLancheItemDto[];
}
