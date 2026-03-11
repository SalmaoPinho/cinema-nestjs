import { IsInt, IsDateString, IsNumber, Min } from 'class-validator';

export class CreateSessaoDto {
    @IsInt()
    filmeId: number;

    @IsInt()
    salaId: number;

    @IsDateString()
    horarioExibicao: string;

    @IsNumber()
    @Min(0)
    precoInteira: number;

    @IsInt()
    cinemaId: number;
}
