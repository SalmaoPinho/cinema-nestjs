import { IsInt, IsNumber, Min } from 'class-validator';

export class CreateIngressoDto {
    @IsInt()
    sessaoId: number;

    @IsNumber()
    @Min(0)
    valorInteira: number;

    @IsNumber()
    @Min(0)
    valorMeia: number;

    @IsNumber()
    @Min(0)
    valorTotal: number;
}
