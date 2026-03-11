import { IsInt, IsDateString } from 'class-validator';

export class CreateSessaoDto {
    @IsInt()
    filmeId: number;

    @IsInt()
    salaId: number;

    @IsDateString()
    horarioExibicao: string;

    @IsInt()
    cinemaId: number;
}
