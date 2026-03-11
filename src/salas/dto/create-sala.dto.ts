import { IsString, IsInt, IsOptional, Min } from 'class-validator';

export class CreateSalaDto {
    @IsInt()
    cinemaId: number;

    @IsInt()
    @Min(1)
    numero: number;

    @IsInt()
    @Min(1)
    capacidade: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    fileiras?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    colunas?: number;
}
